import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelas1743710690201 implements MigrationInterface {
    name = 'CriarTabelas1743710690201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produto" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "descricao" varchar NOT NULL, "preco" decimal NOT NULL, "quantidade" integer NOT NULL, "dataCriacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "dataAtualizacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "categoriaId" integer)`);
        await queryRunner.query(`CREATE TABLE "categoria" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "descricao" varchar NOT NULL, "dataCriacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
        await queryRunner.query(`CREATE TABLE "temporary_produto" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "descricao" varchar NOT NULL, "preco" decimal NOT NULL, "quantidade" integer NOT NULL, "dataCriacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "dataAtualizacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "categoriaId" integer, CONSTRAINT "FK_8a1e81267ae184590ce1ee9a39b" FOREIGN KEY ("categoriaId") REFERENCES "categoria" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_produto"("id", "nome", "descricao", "preco", "quantidade", "dataCriacao", "dataAtualizacao", "categoriaId") SELECT "id", "nome", "descricao", "preco", "quantidade", "dataCriacao", "dataAtualizacao", "categoriaId" FROM "produto"`);
        await queryRunner.query(`DROP TABLE "produto"`);
        await queryRunner.query(`ALTER TABLE "temporary_produto" RENAME TO "produto"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produto" RENAME TO "temporary_produto"`);
        await queryRunner.query(`CREATE TABLE "produto" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar NOT NULL, "descricao" varchar NOT NULL, "preco" decimal NOT NULL, "quantidade" integer NOT NULL, "dataCriacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "dataAtualizacao" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP), "categoriaId" integer)`);
        await queryRunner.query(`INSERT INTO "produto"("id", "nome", "descricao", "preco", "quantidade", "dataCriacao", "dataAtualizacao", "categoriaId") SELECT "id", "nome", "descricao", "preco", "quantidade", "dataCriacao", "dataAtualizacao", "categoriaId" FROM "temporary_produto"`);
        await queryRunner.query(`DROP TABLE "temporary_produto"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
        await queryRunner.query(`DROP TABLE "produto"`);
    }

}
