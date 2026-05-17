import Groq from "groq-sdk"

const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.1-8b-instant"

let groqClient

export const getGroqClient = () => {
  if (!process.env.GROQ_API_KEY) {
    const error = new Error("GROQ_API_KEY is missing. Add it to server/.env locally or to Render environment variables in production.")
    error.statusCode = 503
    throw error
  }

  if (!groqClient) {
    groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY })
  }

  return groqClient
}

export const createGroqJsonCompletion = (prompt) =>
  getGroqClient().chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: GROQ_MODEL,
    response_format: { type: "json_object" },
  })
