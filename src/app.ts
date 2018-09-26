import express from 'express';

import * as homeController from './controllers/home';
import * as path from "path";

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.get('/',homeController.index);

export default app;
