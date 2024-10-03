import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

import { GoogleGenerativeAI } from "@google/generative-ai";

//CONFIGURAR O ENDPOINT

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// POST:
// REQUEST ==>
// RESPONSE <==

app.post("/sendMessage", async (req, res) => {

    const { messages } = req.body;
    console.log(messages[0].parts[0].text);

    //Instanciando o Gemini com a tua API KEY
    const genAI = new GoogleGenerativeAI("AIzaSyDdJcLp2qvG6kDAOfx9AmOnuEwS-sGQOLQ");

    //Selecionando o modelo a ser utilizado
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



    const prompt = messages[messages.length - 1].parts[0].text;

    //resultado da requisição ao Gemini
    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    res.json({
        chat_completion: result.response.text()
    })

});

app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://localhost:${port}`)
})