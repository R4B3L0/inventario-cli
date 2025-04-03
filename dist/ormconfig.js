"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Categoria_1 = require("./entities/Categoria");
const Produto_1 = require("./entities/Produto");
const path_1 = __importDefault(require("path"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "database.sqlite",
    entities: [
        Categoria_1.Categoria,
        Produto_1.Produto,
        path_1.default.join(__dirname, "entities", "*.{ts,js}"), // Garante que TypeORM encontre os arquivos compilados
    ],
    synchronize: true,
    logging: true,
});
