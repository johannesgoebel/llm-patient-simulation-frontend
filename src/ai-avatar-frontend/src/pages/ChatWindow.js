import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [vignette, setVignette] = useState('Astrid Seeger');
  const [apiKey, setApiKey] = useState('');

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
            // Check for CORS issue
            if (response.status === 0) {
                console.error('Failed to update vignette: CORS issue detected.');
            }
            // Check for network problem
            else if (!response.ok && !response.status) {
                console.error('Failed to update vignette: Network error.');
            } else {
                // Other HTTP errors
                const errorMessage = await response.text();
                console.error(`Failed to update vignette: ${response.status} - ${errorMessage}`);
            }
        }
    } catch (error) {
        // Handle general errors
        console.error('Error:', error.message);
    }
};




  const sendMessage = async () => {
    if (!input || !apiKey) return; // Check if input or apiKey is empty
  
    try {
      const basicAuthChatWithPatient = localStorage.getItem('basicAuthChatWithPatient');
      if (!basicAuthChatWithPatient) {
        throw new Error('Authentication token not found');
      }
      const base64Credentials = basicAuthChatWithPatient.split(' ')[1];
      const credentials = atob(base64Credentials);
      const [username, password] = credentials.split(':');

      console.log('Username:', username); // Output: "username"
      console.log('Password:', password); // Output: "Password

      const url = `https://llm-patient-simulation-backend.vercel.app/retrieve_answer?message=${encodeURIComponent(input)}&api_key=${apiKey}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'accept': 'application/json'
        }
      });
  
      if (!response.ok) {
        console.log(response);
        throw new Error('Failed to retrieve answer');
      }
  
      const data = await response.json();
      setMessages([...messages, { user: 'Me', text: input }, { user: 'Bot', text: data.answer }]);
      setInput('');
      setError(null);
      
    } catch (error) {
      setError(error.message);
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

  // Function to handle API key input change
  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh', overflow: 'hidden' }}>
      <div className="row" style={{ width: "80%" }}>
        <div className="col">
          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <div>
              <h4 style={{ margin: "20px" }}>Auswahl der Fallvignette</h4>
              <div className ="row">
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

                <div className = "row">
                  <div className="mb-3">
                    <label htmlFor="apiKeyInput" className="form-label"><h4 style={{ margin: "20px" }}>API Key</h4></label>
                    <input type="text" className="form-control" id="apiKeyInput" placeholder="Hier Key einfügen" value={apiKey} onChange={handleApiKeyChange}></input>
                  </div>

                </div>
              </div>
            </div>
      
          </div>
        </div>
        <div className="col-6">
          <div className="overflow-hidden">
            <div className="card" style={{ overflowY: 'scroll', height: '100%', width : '100%'}}>
              <div className="card-header">
                <h2>Chat </h2>
              </div>
              <div className="card-body d-flex flex-column" style={{ height: '400px' }}>
                <div className="mb-3 flex-grow-1" style={{ overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
                  {messages.map((msg, index) => renderMessage(msg, index))}
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Hier Nachricht eintragen.."
                  />
                  <div className="input-group-append">
                    <button onClick={sendMessage} className="btn btn-primary" disabled={!input || !apiKey}>Senden</button>
                  </div>
                </div>

                {error && <div className="alert alert-danger mt-3">{error}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};  
export default ChatWindow;