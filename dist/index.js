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
const categoriaCLI_1 = require("./cli/categoriaCLI");
const produtoCLI_1 = require("./cli/produtoCLI");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const args = process.argv.slice(2);
        if (args.length === 0) {
            console.log("🚀 Bem-vindo ao Inventário CLI!");
            console.log("Use os seguintes comandos:");
            console.log(" - categoria → Gerenciar categorias");
            console.log(" - produto → Gerenciar produtos");
            return;
        }
        switch (args[0]) {
            case "categoria":
                yield categoriaCLI_1.CategoriaCLI.menu();
                break;
            case "produto":
                yield produtoCLI_1.ProdutoCLI.menu();
                break;
            default:
                console.log("❌ Comando não reconhecido.");
        }
    });
}
main();
