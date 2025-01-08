import fs from 'fs';
import  ollama  from 'ollama';
let category = process.argv[2];
let num = Math.floor(Math.random()*3+1);
let q; 
console.log(category)


async function ask_llm(q) {
    const response = await ollama.chat({
        model: "llama3.1:8b",
        messages: [{ role: "user", content: q }],
    });
    let a = response.message.content;
    fs.writeFile(`Answers.txt`,a,(err)=>{
        if(err){
            throw err;
        }
    });
    console.log(`THE QUESTION IS: ${q}`)
}

switch(category){
    case "ProfessionalWriting":
        q = `./category/c1/q${num}.txt`;
        ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
            if(err){
                throw err;
            }
        }));
        break;
    case "CreativeWriting":
        q = `./category/c2/q${num}.txt`;
        ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
            if(err){
                throw err;
            }
        }));
        break;
        
    case "TechnicalContent":
        q = `./category/c3/q${num}.txt`;
        ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
            if(err){
                throw err;
            }
        }));
        break;
        
    case "AcademicWriting":
        q = `./category/c4/q${num}.txt`;
        ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
            if(err){
                throw err;
            }
        }));
        break;
    case "MarketingContent":
        q = `./category/c5/q${num}.txt`;
        ask_llm(fs.readFileSync(q , 'utf8',(err)=>{
            if(err){
                throw err;
            }
        }));
        break;
    default:
        console.log("Invalid category");
}