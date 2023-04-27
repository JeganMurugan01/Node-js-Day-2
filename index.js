const Express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./router/user.js");
const cors = require('cors');
const app = Express();

app.use(bodyParser.json());
app.use(cors());
const PORT = 5000;
app.use("/user", userRouter);
app.get("/", (req, res) => res.send("Home page"));
app.use(cors({
  origin: 'http://localhost:5000'
}));
app.listen(PORT, () =>
  console.log(`Server Runing at ${PORT} http://localhost:${PORT}`)
);
