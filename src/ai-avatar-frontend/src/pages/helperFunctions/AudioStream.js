import axios from "axios";

export const startStreaming = async ({ voiceId, text, apiKey, voiceSettings, onLoading, onError }) => {
    
        const baseUrl = "https://api.elevenlabs.io/v1/text-to-speech";
        const headers = {
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        };

        console.log(headers);
    
        const requestBody = {
          text,
          voice_settings: voiceSettings,
          model_id: "eleven_multilingual_v1"
        }; 
    
        try {
          // Call the api/v1/voices endpoint to get the list of voices
    const voicesResponse = await axios.get("https://api.elevenlabs.io/v1/voices", { headers });
    if (voicesResponse.status === 200) {
      const germanVoices = voicesResponse.data.voices.filter(voice => 
        voice.fine_tuning && voice.fine_tuning.language === "de"
      );
      console.log("German Voices:", germanVoices);
    } else {
      console.log("Error: Unable to fetch voices.");
    }



          const response = await axios.post(`${baseUrl}/${voiceId}`, requestBody, {
            headers,
            responseType: "blob",
          });
    
          if (response.status === 200) {
            const audio = new Audio(URL.createObjectURL(response.data));
            audio.play();
          } else {
            console.log("Error: Unable to stream audio.");
          }
        } catch (error) {
          console.log("Error: Unable to stream audio.");
        } 
      };

