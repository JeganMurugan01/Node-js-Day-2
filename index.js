import  Express  from "express";
import bodyParser from "body-parser";

const app = Express();

app.use(bodyParser.json());

const PORT=5000;

app.listen(PORT,()=>console.log(`Server Runing at ${PORT} http://localhost:${PORT}`));
