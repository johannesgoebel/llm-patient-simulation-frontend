import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictaphone from './helperFunctions/Dictaphone';
// import { createAudioStreamFromText } from './helperFunctions/audioStreamFromText';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [vignette, setVignette] = useState('Astrid Seeger');
  const [apiKey, setApiKey] = useState('');
  const [dictaphoneState, setDictaphoneState] = useState(1);
  // const [voiceGenState, setVoiceGenState] = useState(true)

  const chatContainerRef = useRef(null); // Ref für den Chat-Container

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]); // Scrollen bei Änderung der Nachrichten

  const handleButtonClick = async (name) => {
    try {
      const url = `https://llm-patient-simulation-backend.vercel.app/conversation/vignette?name=${encodeURIComponent(name)}`;
      const response = await fetch(url, {
        method: 'POST'
      });

      if (response.ok) {
        setVignette(name);
        setMessages([]);
      } else {
        // Handle errors
        if (response.status === 0) {
          console.error('Failed to update vignette: CORS issue detected.');
        } else if (!response.ok && !response.status) {
          console.error('Failed to update vignette: Network error.');
        } else {
          const errorMessage = await response.text();
          console.error(`Failed to update vignette: ${response.status} - ${errorMessage}`);
        }
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input) {
      sendMessage(input);
    }
  };

  const sendMessage = async (message) => {
    if (!message || !apiKey) return;
    setDictaphoneState(2);
    setInput('');
    try {
      const url = `https://llm-patient-simulation-backend.vercel.app/retrieve_answer?message=${encodeURIComponent(message)}&api_key=${apiKey}`;
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
      // if (voiceGenState){
      //   createAudioStreamFromText(data.answer);
      // }

    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const renderMessage = (msg, index) => {
    const isUser = msg.user === 'Me';
    return (
      <div key={index} className={`d-flex ${isUser ? 'justify-content-end' : 'justify-content-start'} my-2`}>
        <div className={`p-2 rounded ${isUser ? 'bg-primary text-white' : 'bg-light text-dark'}`} style={{ maxWidth: '70%' }}>
           {msg.text}
        </div>
      </div>
    );
  };

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', overflow: 'hidden', background: '#696969' }}>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-3">
            <div className="h-100 d-flex flex-column justify-content-center align-items-center" style={{ color: '#faf8ff', height: '100vh' }}>
              <div>
                <h4 style={{ margin: "20px" }}>Auswahl der Fallvignette</h4>
                <div className="row">
                  <button
                    type="button"
                    className={`btn btn-lg ${vignette === 'Astrid Seeger' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => handleButtonClick('Astrid Seeger')}
                  >
                    Astrid Seeger
                  </button>
                  <button
                    type="button"
                    className={`btn btn-lg ${vignette === 'Michael Schulze' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => handleButtonClick('Michael Schulze')}
                  >
                    Michael Schulze
                  </button>
                  <button
                    type="button"
                    className={`btn btn-lg ${vignette === 'Lieselotte Daenger' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => handleButtonClick('Lieselotte Daenger')}
                  >
                    Lieselotte Dänger
                  </button>
                </div>
                <div className="row mt-3">
                  <div className="mb-3">
                    <label htmlFor="apiKeyInput" className="form-label">
                      <h4 style={{ margin: "20px" }}>API Key</h4>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="apiKeyInput"
                      placeholder="Hier Key einfügen"
                      value={apiKey}
                      onChange={handleApiKeyChange}
                    />
                  </div>
                </div>
                <div className="form-check form-switch">
                  { <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  /* onInput={ setVoiceGenState} */ /> }
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Audio generieren</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="rounded-xl shadow-lg" style={{ backgroundColor: 'white', height: '100vh', overflow: 'hidden' }}>
              <div className="chat-container overflow-auto" style={{ height: '60%', padding: '10px', position: 'relative' }}>
                {messages.map((msg, index) => renderMessage(msg, index))}
              </div>
              <div className="container-fluid d-flex justify-content-center align-items-end" style={{ height: '20%' }}>
                <div className="position-fixed bottom-0 mb-3 p-2 rounded-l shadow" style={{ width: '60%', left: '60%', transform: 'translateX(-50%)', background: 'linear-gradient(white, rgba(255, 255, 255, 0))' }}>
                  <Dictaphone sendMessage={sendMessage} dictaphoneState={dictaphoneState} disabled={!apiKey} />
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Hier Nachricht eintragen.."
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
