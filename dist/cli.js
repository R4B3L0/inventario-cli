"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const inventario_1 = require("./inventario");
const inventario = new inventario_1.Inventario();
function menu() {
    while (true) {
        console.log("\n=== Gerenciamento de Inventário ===");
        console.log("1. Adicionar Categoria");
        console.log("2. Listar Categorias");
        console.log("3. Remover Categoria");
        console.log("4. Adicionar Produto");
        console.log("5. Listar Produtos");
        console.log("6. Remover Produto");
        console.log("0. Sair");
        const escolha = readline.questionInt("\nEscolha uma opcao: ");
        switch (escolha) {
            case 1:
                adicionarCategoria();
                break;
            case 2:
                listarCategorias();
                break;
            case 3:
                removerCategoria();
                break;
            case 4:
                adicionarProduto();
                break;
            case 5:
                listarProdutos();
                break;
            case 6:
                removerProduto();
                break;
            case 0:
                console.log("Saindo...");
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}
function adicionarCategoria() {
    const nome = readline.question("Nome da categoria: ");
    const descricao = readline.question("Descrição: ");
    const categoria = inventario.adicionarCategoria(nome, descricao);
    if (!categoria) {
        console.log("Erro ao adicionar categoria.");
        return;
    }
    console.log(`Categoria '${categoria.nome}' adicionada com sucesso!`);
}
function listarCategorias() {
    const categorias = inventario.listarCategorias();
    if (categorias.length === 0) {
        console.log("Nenhuma categoria cadastrada.");
    }
    else {
        console.table(categorias);
    }
}
function removerCategoria() {
    listarCategorias();
    const id = readline.questionInt("ID da categoria para remover: ");
    if (inventario.removerCategoria(id)) {
        console.log("Categoria removida com sucesso!");
    }
    else {
        console.log("Erro: Categoria não encontrada ou possui produtos associados.");
    }
}
function adicionarProduto() {
    listarCategorias();
    const nome = readline.question("Nome do produto: ");
    const descricao = readline.question("Descrição: ");
    const preco = readline.questionFloat("Preço: ");
    const quantidade = readline.questionInt("Quantidade: ");
    const categoriaId = readline.questionInt("ID da categoria: ");
    const produto = inventario.adicionarProduto(nome, descricao, preco, quantidade, categoriaId);
    if (produto) {
        console.log(`Produto '${produto.nome}' adicionado com sucesso!`);
    }
    else {
        console.log("Erro: Categoria não encontrada.");
    }
}
function listarProdutos() {
    const produtos = inventario.listarProdutos();
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
    }
    else {
        console.table(produtos);
    }
}
function removerProduto() {
    listarProdutos();
    const id = readline.questionInt("ID do produto para remover: ");
    if (inventario.removerProduto(id)) {
        console.log("Produto removido com sucesso!");
    }
    else {
        console.log("Erro: Produto não encontrado.");
    }
}
// inicia o programa npx ts-node src/cli.ts
menu();
