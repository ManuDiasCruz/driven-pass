import express, { json, Request, Response } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import chalk from "chalk";

import { errorHandlerMiddleware } from "./middlewares/errorMiddleware.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();

app.use(json());
app.use(router);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(chalk.bgMagenta(`Mode: ${process.env.MODE || "DEV"}`));
    console.log(chalk.blue(`Server is up and runing on port ${port}`));
});