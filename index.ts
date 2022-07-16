import express, { Request, Response } from "express";

const app = express();
const port = 5000;
//const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
        res.send("Its OK!");
});

app.listen(port, () =>
    console.log(`server is up and runing on port ${port}`)
);