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
const inquirer_1 = __importDefault(require("inquirer"));
const produtoCLI_js_1 = require("./produtoCLI.js");
const categoriaCLI_1 = require("./categoriaCLI");
function mainMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            const resposta = yield inquirer_1.default.prompt([
                {
                    type: "list",
                    name: "opcao",
                    message: "Escolha uma opção:",
                    choices: [
                        "Gerenciar Produtos",
                        "Gerenciar Categorias",
                        "Sair"
                    ]
                }
            ]);
            switch (resposta.opcao) {
                case "Gerenciar Produtos":
                    yield produtoCLI_js_1.ProdutoCLI.menu();
                    break;
                case "Gerenciar Categorias":
                    yield categoriaCLI_1.CategoriaCLI.menu();
                    break;
                case "Sair":
                    console.log("Saindo...");
                    process.exit(0);
            }
        }
    });
}
mainMenu();
