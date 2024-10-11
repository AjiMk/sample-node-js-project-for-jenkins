import express from "express";

export const port = 3000;
const app = express();

app.listen(port, () => {
    console.log(`Running on port:${port}`);
})