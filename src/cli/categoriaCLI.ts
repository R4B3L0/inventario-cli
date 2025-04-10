import inquirer from "inquirer";
import { CategoriaService } from "../services/CategoriaService";
import { Categoria } from "../entities/Categoria";
import Table from "cli-table3";

export class CategoriaCLI {
    static async menu() {
        const categoriaService = new CategoriaService();

        while (true) {
            const resposta = await inquirer.prompt([
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
                    const categorias = await categoriaService.listarCategorias();
                    console.table(categorias);
                    break;
                case "Adicionar Categoria":
                    const novaCategoria = await inquirer.prompt([
                        { type: "input", name: "nome", message: "Nome da Categoria:" },
                        { type: "input", name: "descricao", message: "Descrição:" }
                    ]);
                    await categoriaService.criarCategoria(novaCategoria as Categoria);
                    console.log("Categoria adicionada!");
                    break;
                case "Atualizar Categoria":
                    const { id } = await inquirer.prompt([
                        { type: "input", name: "id", message: "ID da Categoria a atualizar:" }
                    ]);
                    const atualizacoes = await inquirer.prompt([
                        { type: "input", name: "nome", message: "Novo nome (deixe em branco para manter o mesmo):" },
                        { type: "input", name: "descricao", message: "Nova descrição:" }
                    ]);
                    await categoriaService.atualizarCategoria(parseInt(id), atualizacoes);
                    console.log("Categoria atualizada!");
                    break;
                case "Remover Categoria":
                    const { idRemover } = await inquirer.prompt([
                        { type: "input", name: "idRemover", message: "ID da Categoria a remover:" }
                    ]);
                    await categoriaService.deletarCategoria(parseInt(idRemover));
                    console.log("Categoria removida!");
                    break;
                case "Voltar":
                    return;
            }
        }
    }
}
