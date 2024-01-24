"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coureseRouter = void 0;
const express_1 = require("express");
const courses_repositories_1 = require("../repositories/courses-repositories");
exports.coureseRouter = (0, express_1.Router)();
exports.coureseRouter.get('/', (req, res) => {
    var _a;
    const foundProducts = courses_repositories_1.coursesRepository.findProduct((_a = req.query.name) === null || _a === void 0 ? void 0 : _a.toString());
    res.json(foundProducts);
});
exports.coureseRouter.get('/:id', (req, res) => {
    const foundIdProduct = courses_repositories_1.coursesRepository.findIdProducts(+req.params.id);
    res.send(foundIdProduct);
});
exports.coureseRouter.post('/', (req, res) => {
    const createdProduct = courses_repositories_1.coursesRepository.createProduct(req.body.name.toString());
    res.sendStatus(createdProduct);
});
exports.coureseRouter.delete('/:id', (req, res) => {
    const deletedProduct = courses_repositories_1.coursesRepository.deleteProducts(+req.params.id);
    res.sendStatus(deletedProduct);
});
exports.coureseRouter.put('/:id', (req, res) => {
    const updatedroduct = courses_repositories_1.coursesRepository.updateProduct(+req.params.id, req.body.name);
    res.sendStatus(updatedroduct);
});
