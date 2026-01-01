'use server'
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export async function generateRoast(artists: string[]) {
    const artistText = artists.join(", ")
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are funny and sarcastic 
    I will give you a list of artists a user listens to.
    
    TASK: Roast the USER's specific personality and taste based on this combination.
    
    RULES:
    1. Do NOT roast the artists individually.
    2. Do NOT use bullet points or numbered lists.
    3. Keep it under 50 words.
    4. You are a comedian, be funny
    5. Atleast refer 1-2 artist or their songs
    
    here is the artists: ${artistText}`
    });

    return response.text
}