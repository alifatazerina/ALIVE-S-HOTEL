import express from "express";
import "dotenv/config";
import {db} from "./configs/db.js";

const app = express()
const PORT = process.env.PORT;

app.use ('/', (req, res) => {
    res.status(200).json({
        massage: "Hello Word",
    });
});

app.use("*", (req, res)=>{
    res.status(404).json({
        massage: "not found",
    });
});

//Start the express server
app.listen(PORT, () => {
    console.log("server listening on port ${PORT}");
});