"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adressesRouter = void 0;
const express_1 = require("express");
const adresses_repositories_1 = require("../repositories/adresses-repositories");
exports.adressesRouter = (0, express_1.Router)();
exports.adressesRouter.get('/', (req, res) => {
    var _a;
    const foundAdresses = adresses_repositories_1.adressesRepositories.findAdress((_a = req.query.value) === null || _a === void 0 ? void 0 : _a.toString());
    res.json(foundAdresses);
});
exports.adressesRouter.post('/', (req, res) => {
    const sentAdresses = adresses_repositories_1.adressesRepositories.sendAdress(req.body.value);
    res.sendStatus(sentAdresses);
});
