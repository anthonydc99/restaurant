"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BebidaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bebidas = yield database_1.default.query('SELECT * FROM bebida');
            res.json(bebidas);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idBebida } = req.params;
            const bebidaFound = yield database_1.default.query('SELECT * FROM bebida WHERE idBebida = ?', [idBebida]);
            if (bebidaFound.length > 0) {
                res.json(bebidaFound);
            }
            else {
                res.status(404).json({ text: "No hay bebidas" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO bebida set ?', [req.body]);
            res.json({ text: 'creating bebida' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idBebida } = req.params;
            yield database_1.default.query('UPDATE bebida set ? WHERE idBebida = ?', [req.body, idBebida]);
            res.json({ text: 'Updating bebida ' + req.params.id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idBebida } = req.params;
            yield database_1.default.query('DELETE FROM bebida WHERE idBebida = ?', [idBebida]);
            res.json({ text: 'Deleting bebida ' + req.params.id });
        });
    }
}
const bebidaController = new BebidaController();
exports.default = bebidaController;
