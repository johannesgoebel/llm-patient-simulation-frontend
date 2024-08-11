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
    return <span>Dieser Browser unterstützt keine Spracherkennung. Diese App ist primär für Google Chrome und andere Chromium-basierte Browser entwickelt.</span>;
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
        return <div className="spinner-border text-light" role="status">
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
    timeout(7000);
    SpeechRecognition.stopListening();
    sendMessage(transcript);
  };

  return (
    <div className="chat-input-container d-flex justify-content-center align-items-center">
    <div className="d-flex align-items-center">
        <button 
            className="round-button btn btn-primary dictaphone-button" 
            style={{ borderRadius: '50%', width: '100px', height: '100px', margin: '10px' }} 
            onMouseDown={SpeechRecognition.startListening} 
            onMouseUp={handleMouseUp} 
        >
            {renderIcon()}
        </button>
        <p className="text-primary" style={{ margin: '0 0 0 10px' }}>Zur Spracheingabe Button drücken und halten</p>
    </div>
</div>
  );
};

export default Dictaphone;