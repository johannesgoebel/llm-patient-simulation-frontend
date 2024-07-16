const { ElevenLabsClient, stream } = require("elevenlabs");
const dotenv = require("dotenv");

dotenv.config();

const ELEVENLABS_API_KEY = process.env.REACT_APP_ELEVENLABS_API_KEY;

console.log(ELEVENLABS_API_KEY);

if (!ELEVENLABS_API_KEY) {
  throw new Error("Missing ELEVENLABS_API_KEY in environment variables");
}

const client = new ElevenLabsClient({
  apiKey: ELEVENLABS_API_KEY,
});

const createAudioStreamFromText = async (text) => {
  const audioStream = await client.generate({
    voice: "Rachel",
  text: "Hello! 你好! Hola! नमस्ते! Bonjour! こんにちは! مرحبا! 안녕하세요! Ciao! Cześć! Привіт! வணக்கம்!",
  model_id: "eleven_multilingual_v2"
  });
  await stream(audioStream);
};

module.exports = { createAudioStreamFromText };
