import "reflect-metadata";
import { AppDataSource } from "./ormconfig";
import { CategoriaCLI } from "./cli/categoriaCLI";
import { ProdutoCLI } from "./cli/produtoCLI";

async function main() {
    try {
        // Inicializa a conexão com o banco de dados
        await AppDataSource.initialize();
        console.log("📦 Banco de dados conectado com sucesso!");

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
                await CategoriaCLI.menu();
                break;
            case "produto":
                await ProdutoCLI.menu();
                break;
            default:
                console.log("❌ Comando não reconhecido.");
        }
    } catch (error) {
        console.error("❌ Erro ao conectar no banco:", error);
    }
}

main();
