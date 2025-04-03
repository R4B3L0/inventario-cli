"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Categoria_1 = require("./src/entities/Categoria");
const Produto_1 = require("./src/entities/Produto");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "database.sqlite",
    entities: [Categoria_1.Categoria, Produto_1.Produto],
    synchronize: true,
    logging: true,
});
