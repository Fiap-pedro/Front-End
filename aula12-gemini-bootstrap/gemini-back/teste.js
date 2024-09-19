import { GoogleGenerativeAI } from "@google/generative-ai";

//Instanciando o Gemini com a tua API KEY
const genAI = new GoogleGenerativeAI("");

//Selecionando o modelo a ser utilizado
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const prompt = "Qual o nome mais popular no Brasil ?";

//resultado da requisição ao Gemini
const result = await model.generateContent(prompt);
console.log(result.response.text());