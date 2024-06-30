const { ElevenLabsClient } = require("elevenlabs");
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
    voice: "Helmut Schwarz",
    model_id: "bRIX82ywyYryS8320ZVY",
    text,
  });

  const chunks = [];
  for await (const chunk of audioStream) {
    chunks.push(chunk);
  }

  const content = Buffer.concat(chunks);
  return content;
};

module.exports = { createAudioStreamFromText };
