import  Express  from "express";
import bodyParser from "body-parser";
import userRouter from "./router/user.js"
const app = Express();

app.use(bodyParser.json());

const PORT=5000;
app.use("/user",userRouter);
app.get('/',(req,res)=> res.send('Home page'))

app.listen(PORT,()=>console.log(`Server Runing at ${PORT} http://localhost:${PORT}`));
