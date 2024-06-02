import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [systemPromptData, setSystemPromptData] = useState(null);
  const [currentPromptData, setCurrentPromptData] = useState(null);
  const [vignette, setVignette] = useState('Astrid Seeger');

  
  const fetchCurrentPromptData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/conversation/current_prompt', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setCurrentPromptData(result.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonClick = async (name) => {
    try {
        const url = `http://127.0.0.1:8000/conversation/vignette?name=${encodeURIComponent(name)}`;

        const response = await fetch(url, {
            method: 'POST'
        });

        if (response.ok) {
            setVignette(name);
            fetchSystemPromptData();
            fetchCurrentPromptData();
            setMessages([]);

        } else {
            console.error('Failed to update vignette');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

const fetchSystemPromptData = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/conversation/load_case_vignette', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const result = await response.json();
    setSystemPromptData(result.message);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  const sendMessage = async () => {
    if (!input) return;
  
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

      const url = `http://127.0.0.1:8000/retrieve_answer?message=${encodeURIComponent(input)}`;

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
      setMessages([...messages, { user: 'Me', text: input }, { user: 'Bot', text: data.answer }]);
      setInput('');
      fetchCurrentPromptData();
      setError(null);
      
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchSystemPromptData();
    fetchCurrentPromptData();
  }, []);

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

  return (
    <div className="overflow-hidden">
      <div className="container mt-5" style={ {overflowY : 'hidden', minHeight : "100%", maxHeight : '100%'}}>
        <div className="row">
          <div className="col">
            <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <div>
              
              <h4 style={{margin : "20px"}}>Auswahl der Fallvignette</h4>
              <div>
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
              </div>
            </div>
            <div className="card-columns">
                <div className="card" style= {{margin : "20px"}}>
                  <div className="card-body">
                    <h5 className="card-title">Aktueller Prompt</h5>
                    {currentPromptData ? (
                      <p className="card-text">{currentPromptData}</p>
                    ) : (
                      <div className="card-text">

                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="card p-3" style= {{margin : "20px"}}>
                  <div className="card-body">
                    <h5 className="card-title">System Prompt</h5>
                    {systemPromptData ? (
                      <p className="card-text">{systemPromptData}</p>
                    ) : (
                      <div className="card-text">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
           <div className="overflow-hidden">
            <div className="card" style={ {overflowY : 'hidden', minHeight : "100%", maxHeight : '100%'}}>
              <div className="card-header">
                <h2>Chat </h2>
              </div>
              <div className="card-body d-flex flex-column" style={{ height : '400 px'}}>
                <div className="mb-3 flex-grow-1" style={{ overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', minHeight: '400px' }}>
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
                    <button onClick={sendMessage} className="btn btn-primary">Senden</button>
                  </div>
                </div>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {/* {audioUrl && (
                  <audio controls autoPlay>
                    <source src={audioUrl} type="audio/mpeg" />
                  </audio>
                )} */}
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