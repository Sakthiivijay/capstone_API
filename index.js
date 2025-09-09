import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = process.env.port || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", async (req,res)=>{
try{
const result= await axios.get("https://v2.jokeapi.dev/joke/Any");
res.render("index.ejs",{
    output1: result.data.setup,
    output2: result.data.delivery,

});
}catch(error){
    res.sendStatus(404).send(error.message);
}
});
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})