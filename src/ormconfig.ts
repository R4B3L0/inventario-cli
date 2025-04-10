import "reflect-metadata";
import { DataSource } from "typeorm";
import { Categoria } from "./entities/Categoria";
import { Produto } from "./entities/Produto";
import path from "path";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: [
    Categoria,
    Produto,
    path.join(__dirname, "entities", "*.{ts,js}"),
  ],
  synchronize: true,
  logging: false,
});
