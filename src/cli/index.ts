import inquirer from "inquirer";
import { ProdutoCLI } from "./produtoCLI.js";
import { CategoriaCLI } from "./categoriaCLI";


async function mainMenu() {
    while (true) {
        const resposta = await inquirer.prompt([
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
                await ProdutoCLI.menu();
                break;
            case "Gerenciar Categorias":
                await CategoriaCLI.menu();
                break;
            case "Sair":
                console.log("Saindo...");
                process.exit(0);
        }
    }
}

mainMenu();
