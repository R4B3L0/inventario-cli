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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoCLI = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const ProdutoService_1 = require("../services/ProdutoService");
class ProdutoCLI {
    static menu() {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoService = new ProdutoService_1.ProdutoService();
            while (true) {
                const resposta = yield inquirer_1.default.prompt([
                    {
                        type: "list",
                        name: "opcao",
                        message: "Escolha uma opção para Produtos:",
                        choices: [
                            "Listar Produtos",
                            "Adicionar Produto",
                            "Atualizar Produto",
                            "Remover Produto",
                            "Voltar"
                        ]
                    }
                ]);
                switch (resposta.opcao) {
                    case "Listar Produtos":
                        const produtos = yield produtoService.listarProdutos();
                        console.table(produtos);
                        break;
                    case "Adicionar Produto":
                        const novoProduto = yield inquirer_1.default.prompt([
                            { type: "input", name: "nome", message: "Nome do Produto:" },
                            { type: "input", name: "descricao", message: "Descrição:" },
                            { type: "input", name: "preco", message: "Preço:", validate: (input) => !isNaN(parseFloat(input)) || "Digite um número válido" }
                        ]);
                        yield produtoService.criarProduto(novoProduto);
                        console.log("Produto adicionado!");
                        break;
                    case "Atualizar Produto":
                        const { id } = yield inquirer_1.default.prompt([
                            { type: "input", name: "id", message: "ID do Produto a atualizar:" }
                        ]);
                        const atualizacoes = yield inquirer_1.default.prompt([
                            { type: "input", name: "nome", message: "Novo nome (deixe em branco para manter o mesmo):" },
                            { type: "input", name: "descricao", message: "Nova descrição:" },
                            { type: "input", name: "preco", message: "Novo preço:" }
                        ]);
                        yield produtoService.atualizarProduto(parseInt(id), atualizacoes);
                        console.log("Produto atualizado!");
                        break;
                    case "Remover Produto":
                        const { idRemover } = yield inquirer_1.default.prompt([
                            { type: "input", name: "idRemover", message: "ID do Produto a remover:" }
                        ]);
                        yield produtoService.deletarProduto(parseInt(idRemover));
                        console.log("Produto removido!");
                        break;
                    case "Voltar":
                        return;
                }
            }
        });
    }
}
exports.ProdutoCLI = ProdutoCLI;
