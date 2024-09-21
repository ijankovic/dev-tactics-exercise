const express= require("express");
const app = express();

app.get("/", (req, resp, next) => {
    resp.send("Example of Hello word application in Node.js");
});

app.listen(5000);

//console.log("Hello word from index.js + update");
