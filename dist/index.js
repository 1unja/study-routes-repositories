"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const coursesRouter_1 = require("./routes/coursesRouter");
const adressesRouter_1 = require("./routes/adressesRouter");
const app = (0, express_1.default)();
const port = 3000;
const jsonBodyMidlewear = (0, body_parser_1.default)({});
app.use(jsonBodyMidlewear);
app.use('/home', coursesRouter_1.coureseRouter);
app.use('/adresses', adressesRouter_1.adressesRouter);
app.listen(port, () => {
    console.log('app is listening port: ' + port);
});
