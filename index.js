const Express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./router/user.js");
const app = Express();

app.use(bodyParser.json());

const PORT = 5000;
app.use("/user", userRouter);
app.use("/userdetails", userRouter)
app.get("/", (req, res) => res.send("Home page"));

app.listen(PORT, () =>
  console.log(`Server Runing at ${PORT} http://localhost:${PORT}`)
);
