"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriarTabelas1743710690201 = void 0;
class CriarTabelas1743710690201 {
    constructor() {
        this.name = 'CriarTabelas1743710690201';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "produto" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "descricao" varchar NOT NULL, "preco" decimal NOT NULL, "quantidade" integer NOT NULL, "dataCriacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "dataAtualizacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "categoriaId" integer)`);
            yield queryRunner.query(`CREATE TABLE "categoria" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "descricao" varchar NOT NULL, "dataCriacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
            yield queryRunner.query(`CREATE TABLE "temporary_produto" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "descricao" varchar NOT NULL, "preco" decimal NOT NULL, "quantidade" integer NOT NULL, "dataCriacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "dataAtualizacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "categoriaId" integer, CONSTRAINT "FK_8a1e81267ae184590ce1ee9a39b" FOREIGN KEY ("categoriaId") REFERENCES "categoria" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
            yield queryRunner.query(`INSERT INTO "temporary_produto"("id", "nome", "descricao", "preco", "quantidade", "dataCriacao", "dataAtualizacao", "categoriaId") SELECT "id", "nome", "descricao", "preco", "quantidade", "dataCriacao", "dataAtualizacao", "categoriaId" FROM "produto"`);
            yield queryRunner.query(`DROP TABLE "produto"`);
            yield queryRunner.query(`ALTER TABLE "temporary_produto" RENAME TO "produto"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "produto" RENAME TO "temporary_produto"`);
            yield queryRunner.query(`CREATE TABLE "produto" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "descricao" varchar NOT NULL, "preco" decimal NOT NULL, "quantidade" integer NOT NULL, "dataCriacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "dataAtualizacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "categoriaId" integer)`);
            yield queryRunner.query(`INSERT INTO "produto"("id", "nome", "descricao", "preco", "quantidade", "dataCriacao", "dataAtualizacao", "categoriaId") SELECT "id", "nome", "descricao", "preco", "quantidade", "dataCriacao", "dataAtualizacao", "categoriaId" FROM "temporary_produto"`);
            yield queryRunner.query(`DROP TABLE "temporary_produto"`);
            yield queryRunner.query(`DROP TABLE "categoria"`);
            yield queryRunner.query(`DROP TABLE "produto"`);
        });
    }
}
exports.CriarTabelas1743710690201 = CriarTabelas1743710690201;
