const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("hello from first");
    next();
})

app.use((req, res, next) => {
    console.log("hello from second")
    res.send("<h1>inside the middleware</h1>")
})

app.listen(3000)