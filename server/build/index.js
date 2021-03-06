"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const platoRoutes_1 = __importDefault(require("./routes/platoRoutes"));
const bebidaRoutes_1 = __importDefault(require("./routes/bebidaRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
        this.start();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        //  MORGAN PERMITE VER LAS PETICIONES QUE SE REALIZAN EN LA CONSOLA DESPUES QUE SE REALIZAN
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        // LLAMA A LAS RUTAS DEL INDEXROUTES QUE SUS DIRECC CORREN A PARTIR DE ESTA DIRECCION
        this.app.use('/api/frase', indexRoutes_1.default);
        this.app.use('/api/plato', platoRoutes_1.default);
        this.app.use('/api/bebida', bebidaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port`, this.app.get('port'));
        });
    }
}
const server = new Server();
