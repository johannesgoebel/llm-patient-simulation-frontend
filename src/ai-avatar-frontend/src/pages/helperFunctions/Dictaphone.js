import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SoundIcon from '../static/SoundIcon';
import MicIcon from '../static/MicIcon';

const Dictaphone = ({ sendMessage, dictaphoneState }) => {
  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const renderIcon = () => {
    switch (dictaphoneState) {
      case 1:
        return (
          <MicIcon/>
        );
      case 2:
        return <div className="pulsating-button"></div>;
      case 3:
        return (
          <SoundIcon/>
        );
      default:
        return null;
    }
  };
  // Define input and apiKey or pass them as props or state
  const input = true; // This should be replaced with the actual logic
  const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

  const handleMouseUp = () => {
    SpeechRecognition.stopListening();
    sendMessage(transcript);
  };

  return (
    <div className="chat-input-container  d-flex flex-column align-items-center">
      <button 
        className="round-button btn btn-primary dictaphone-button" 
        style={{ borderRadius: '50%', width: '100px', height: '100px' , margin: '20px'}} 
        onMouseDown={SpeechRecognition.startListening} 
        onMouseUp={handleMouseUp} 
        disabled={!input || !apiKey}
      >
        {renderIcon()}
      </button>
    </div>
  );
};

export default Dictaphone;
