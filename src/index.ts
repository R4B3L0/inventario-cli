import "reflect-metadata";
import { AppDataSource } from "./ormconfig";
import inquirer from "inquirer";

AppDataSource.initialize()
  .then(async () => {
    console.log("Banco de dados conectado com sucesso!");

    const { opcao } = await inquirer.prompt([
      {
        type: "list",
        name: "opcao",
        message: "Escolha o que deseja gerenciar:",
        choices: ["Gerenciar Categorias", "Gerenciar Produtos", "Sair"]
      }
    ]);

    switch (opcao) {
      case "Gerenciar Categorias":
        const { CategoriaCLI } = await import("./cli/categoriaCLI");
        await CategoriaCLI.menu();
        break;
      case "Gerenciar Produtos":
        const { ProdutoCLI } = await import("./cli/produtoCLI");
        await ProdutoCLI.menu();
        break;
      case "Sair":
        console.log("Até mais!");
        process.exit(0);
    }
  })
  .catch((err) => {
    console.error("Erro ao conectar no banco:", err);
  });
