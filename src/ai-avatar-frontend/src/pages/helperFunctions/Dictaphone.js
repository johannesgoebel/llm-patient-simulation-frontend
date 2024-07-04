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
    return <span>Browser doesn't support speech recognition. This app is primarily developed for Google Chrome.</span>;
  }

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}
  const renderIcon = () => {
    switch (dictaphoneState) {
      case 1:
        return (
          <MicIcon/>
        );
      case 2:
        return <div class="spinner-border text-light" role="status">
      </div>;
      case 3:
        return (
          <SoundIcon/>
        );
      default:
        return null;
    }
  };
  const handleMouseUp = () => {
    timeout(5000);
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
      >
        {renderIcon()}
      </button>
      <p class="text-primary">Zur Spracheingabe Button drücken und halten</p>
    </div>
  );
};

export default Dictaphone;
