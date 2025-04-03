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
exports.CategoriaCLI = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const CategoriaService_1 = require("../services/CategoriaService");
class CategoriaCLI {
    static menu() {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaService = new CategoriaService_1.CategoriaService();
            while (true) {
                const resposta = yield inquirer_1.default.prompt([
                    {
                        type: "list",
                        name: "opcao",
                        message: "Escolha uma opção para Categorias:",
                        choices: [
                            "Listar Categorias",
                            "Adicionar Categoria",
                            "Atualizar Categoria",
                            "Remover Categoria",
                            "Voltar"
                        ]
                    }
                ]);
                switch (resposta.opcao) {
                    case "Listar Categorias":
                        const categorias = yield categoriaService.listarCategorias();
                        console.table(categorias);
                        break;
                    case "Adicionar Categoria":
                        const novaCategoria = yield inquirer_1.default.prompt([
                            { type: "input", name: "nome", message: "Nome da Categoria:" },
                            { type: "input", name: "descricao", message: "Descrição:" }
                        ]);
                        yield categoriaService.criarCategoria(novaCategoria);
                        console.log("Categoria adicionada!");
                        break;
                    case "Atualizar Categoria":
                        const { id } = yield inquirer_1.default.prompt([
                            { type: "input", name: "id", message: "ID da Categoria a atualizar:" }
                        ]);
                        const atualizacoes = yield inquirer_1.default.prompt([
                            { type: "input", name: "nome", message: "Novo nome (deixe em branco para manter o mesmo):" },
                            { type: "input", name: "descricao", message: "Nova descrição:" }
                        ]);
                        yield categoriaService.atualizarCategoria(parseInt(id), atualizacoes);
                        console.log("Categoria atualizada!");
                        break;
                    case "Remover Categoria":
                        const { idRemover } = yield inquirer_1.default.prompt([
                            { type: "input", name: "idRemover", message: "ID da Categoria a remover:" }
                        ]);
                        yield categoriaService.deletarCategoria(parseInt(idRemover));
                        console.log("Categoria removida!");
                        break;
                    case "Voltar":
                        return;
                }
            }
        });
    }
}
exports.CategoriaCLI = CategoriaCLI;
