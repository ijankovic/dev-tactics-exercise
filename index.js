const express= require("express");
const app = express();

app.get("/", (req, resp, next) => {
    resp.send("Hello word IJA!");
});

app.listen(5000);

//console.log("Hello word from index.js + update");
