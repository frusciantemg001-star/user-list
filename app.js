import express from "express";
import users from "./routes/users.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

// app.get("/", (req, res) => res.send("Hello World!"));

// app.use(express.static("public"));
app.use("/users", users);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
