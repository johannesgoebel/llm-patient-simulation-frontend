import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictaphone from './helperFunctions/Dictaphone';
// import { createAudioStreamFromText } from './helperFunctions/audioStreamFromText';
import {startStreaming} from './helperFunctions/AudioStream';
import Sidepanel from './helperFunctions/Sidepanel';

const vignetteMap = {
  'astrid-seeger': 'Astrid Seeger',
  'michael-schulze': 'Michael Schulze',
  'lieselotte-daenger': 'Lieselotte Dänger',
};
function generateUUID() {
  return crypto.randomUUID();
};
function checkAndSetSessionID() {
  const sessionIDKey = 'sessionID';
  
  // Check if sessionID is already in localStorage
  let sessionID = localStorage.getItem(sessionIDKey);
  console.log(sessionID);
  
  if (!sessionID) {
      // If sessionID doesn't exist, generate a new one
      sessionID = generateUUID();
      
      // Store the new sessionID in localStorage
      localStorage.setItem(sessionIDKey, sessionID);
  }

  // Return the sessionID (whether newly generated or existing)
  return sessionID;
};


const ChatWindow = ({ vignette }) => {

  const vignetteName = vignetteMap[vignette] || 'Unknown Vignette'; // Default to 'Unknown Vignette' if not found
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  // const [vignette, setVignette] = useState('Astrid Seeger');
  const [apiKey, setApiKey] = useState('');
  const [dictaphoneState, setDictaphoneState] = useState(1);
  const [voiceGenState, setVoiceGenState] = useState(true)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dotenv = require("dotenv");
  const sessionId = checkAndSetSessionID(); // Make sure this function is correctly implemented to return a session ID
  
  dotenv.config();
  const ELEVENLABS_API_KEY = process.env.REACT_APP_ELEVENLABS_API_KEY;
  console.log(ELEVENLABS_API_KEY);

  if (!ELEVENLABS_API_KEY) {
    throw new Error("Missing ELEVENLABS_API_KEY in environment variables");
  }
  const chatContainerRef = useRef(null); // Ref für den Chat-Container
  const voiceIdAstrid = 'cgSgspJ2msm6clMCkdW9';
  const voiceIdMichael = 't0jbNlBVZ17f02VDIeMI';
  const voiceIdLieselotte = 'pFZP5JQG7iQjIQuC4Bku';
  const voiceSettings = {
  stability: 0.5,
  similarity_boost: 0.75,
  style: 1,
  use_speaker_boost: true,
  };

  useEffect(() => {
    const sessionId = checkAndSetSessionID();
    console.log('Session ID:', sessionId);
    fetchMessages(sessionId)
}, [sessionId]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]); // Scrollen bei Änderung der Nachrichten

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input) {
      sendMessage(input);
    }
  };

  const fetchMessages = async (sessionId) => {
    if (!sessionId || !vignetteName) return;

    try {
      const response = await fetch(`https://llm-patient-simulation-backend.vercel.app/conversation/load_messages?session_id=${encodeURIComponent(sessionId)}&case_report_id=${encodeURIComponent(vignetteName)}`);
      if (!response.ok) {
        throw new Error('Failed to load messages');
      }
      const data = await response.json();
      console.log(data);
      const apiMessages = data.response.map(([sender, text]) => ({
        user: sender === 'Arzt' ? 'Me' : sender,
        text: text
    }));
    
    // Update the messages state by adding all the API messages
    setMessages([...messages, ...apiMessages]);

    } catch (error) {
      console.error('Error loading messages:', error);
      setError('Failed to load messages');
    } finally {
      setLoading(false); // Set loading to false once done
    }
  };
  const clearConversation = async () => {
    if (!sessionId) return;

    try {
      const url = `https://llm-patient-simulation-backend.vercel.app/conversation/clear?session_id=${encodeURIComponent(sessionId)}`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to clear conversation');
      }
      
      // Clear messages from state
      setMessages([]);
    } catch (error) {
      console.error('Error clearing conversation:', error);
    }
  };

  const sendMessage = async (message) => {
    if (!message || !apiKey) return;
    setDictaphoneState(2);
    setInput('');
    try {
      const url = `https://llm-patient-simulation-backend.vercel.app/retrieve_answer?message=${encodeURIComponent(message)}&api_key=${apiKey}&session_id=${encodeURIComponent(sessionId)}&case_report_id=${encodeURIComponent(vignetteName)}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to retrieve answer');
      }
      const data = await response.json();
      setMessages([...messages, { user: 'Me', text: message }, { user: 'Bot', text: data.answer }]);
      setInput('');
      setDictaphoneState(1); // Reset dictaphone state after successful message
      console.log(vignetteName);
      if (voiceGenState) {
        var voiceId = '';
        if(vignetteName === 'Michael Schulze'){
          voiceId = voiceIdMichael;
        }
        if(vignetteName === 'Astrid Seeger'){
          voiceId = voiceIdAstrid;
        }
        if(vignetteName === 'Lieselotte Dänger'){
          voiceId = voiceIdLieselotte;
        }        

        startStreaming({
          voiceId, 
          text: data.answer,
          apiKey: ELEVENLABS_API_KEY,
          voiceSettings,
          onLoading: setLoading, // you need to define setLoading state
          onError: setError // you need to define setError state
        });
      }

    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  const handleInputChange = () => {
    setVoiceGenState(!voiceGenState);
  };
  const renderMessage = (msg, index) => {
    const isUser = msg.user === 'Me';
    return (
      <div key={index} className={`d-flex ${isUser ? 'justify-content-end' : 'justify-content-start'} my-2`}>
        <div className={`p-2 rounded ${isUser ? 'bg-primary text-white' : 'bg-light text-dark'}`} style={{ maxWidth: '40%' }}>
           {msg.text}
        </div>
      </div>
    );
  };

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  return (
    <div style={{ maxHeight: '100vh', overflow: 'hidden'}}>
      <nav className="navbar bg-dark border-bottom border-body h-10" data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-text">
            Einsatz KI-basierter Patientensimulationen in der medizinischen Lehre
          </span>
        </div>
      </nav>
      <div className="container-fluid d-flex justify-content-center align-items-start" style={{ minHeight: '90vh', overflow: 'hidden', background: '#696969' }}>
        <div className="row" style={{ width: "100%" }}>
        <div className="col-3">
          <div className="h-90 d-flex flex-column justify-content-between align-items-start" style={{ color: '#faf8ff', height: '90vh'}}>
              <Sidepanel 
                  vignetteName={vignetteName}
                  apiKey={apiKey}
                  handleApiKeyChange={handleApiKeyChange}
              />
              <div className="w-100 d-flex flex-column align-items-start">
                  <div className="form-check form-switch mb-3">
                      <input 
                          className="form-check-input" 
                          type="checkbox" 
                          role="switch" 
                          id="flexSwitchCheckDefault" 
                          onInput={handleInputChange} 
                          checked={voiceGenState}
                      />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ display: 'flex', alignItems: 'center' }}>
                          <p style={{ margin: "0 10px 0 0" }}>Audio generieren</p>
                          <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Neben der schriftlichen Ausgabe der Patientenäußerungen gibt es eine Sprachausgabe.">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                              </svg>
                          </span>
                      </label>
                  </div>
                  <div className="">
                      <button type="button" className="btn btn-primary btn-lg" onClick={clearConversation}>Gesprächsverläufe löschen</button>
                  </div>
              </div>
              
          </div>
      </div>

          <div className="col-9">
            <div className="rounded-xl shadow-lg" style={{ backgroundColor: 'white', height: '100vh', overflow: 'hidden' }}>
            <div className="chat-container overflow-auto" style={{ height: '60%', padding: '10px', position: 'relative' }}>
                {messages.length > 0 ? (
                    messages.map((msg, index) => renderMessage(msg, index))
                ) : (
                    <div className="m-4">
                      <h3>Willkommen zur KI-gestützten Patientensimulation.</h3>
                      <p className="lead">
                      Sie haben die Gelegenheit, ein Anamnesegespräch mit einem virtuellen Patienten zu führen. Diese Simulation dient dazu, Ihre Fähigkeiten in der Gesprächsführung und Diagnosestellung zu üben und zu optimieren.
                      </p>
                      <p className="text-muted">
                      Bevor Sie starten, tragen Sie bitte den sogenannten "API-Key" in das unten links angezeigte Feld ein, um die Simulation zu aktivieren.
                      </p>
                      <p className="text-muted">
                      Sobald dies erledigt ist, können Sie das Gespräch beginnen, indem Sie den Patienten begrüßen oder Ihre erste Frage stellen.
                      </p>
                    </div>
                )}
            </div>

              <div className="container-fluid d-flex justify-content-center align-items-end" style={{ height: '20%' }}>
                <div className="position-fixed bottom-0 mb-3 p-2 rounded-l shadow" style={{ width: '60%', left: '60%', transform: 'translateX(-50%)', background: 'linear-gradient(white, rgba(255, 255, 255, 0))' }}>
                  <Dictaphone 
                    sendMessage={sendMessage} 
                    dictaphoneState={dictaphoneState} 
                    disabled={!apiKey} 
                  />
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Anamnesegespräch mit Patienten durch Text- oder Spracheingabe beginnen."
                    />
                    <div className="input-group-append">
                      <button onClick={() => sendMessage(input)} className="btn btn-primary" disabled={!input || !apiKey}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;