import fs from 'fs';

import ollama from "ollama";

async function ask_llm(q) {
    const response = await ollama.chat({
        model: "llama3.1:8b",
        messages: [{ role: "user", content: q }],
    });
    let a = response.message.content;
    fs.writeFile(`a.txt`,a,(err)=>{
        if(err){
            throw err;
        }
    });
}

ask_llm(fs.readFileSync("q.txt", 'utf8',(err)=>{
        if(err){
            throw err;
        }
    }));

