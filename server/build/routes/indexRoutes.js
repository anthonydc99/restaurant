"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = __importDefault(require("../controllers/indexController"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.default.list);
        this.router.get('/count', indexController_1.default.count);
        this.router.get('/:idFrase', indexController_1.default.getOne);
        this.router.post('/', indexController_1.default.create);
        this.router.put('/:idFrase', indexController_1.default.update);
        this.router.delete('/:idFrase', indexController_1.default.delete);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
