import inquirer from "inquirer";
import { ProdutoService } from "../services/ProdutoService";
import { Produto } from "../entities/Produto";
import { CategoriaService } from "../services/CategoriaService";

export class ProdutoCLI {
    static async menu() {
        const categoriaService = new CategoriaService();
        const produtoService = new ProdutoService();

        while (true) {
            const resposta = await inquirer.prompt([
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
                    const produtos = await produtoService.listarProdutos();
                    console.table(produtos);
                    break;
                    case "Adicionar Produto":
                        const categorias = await categoriaService.listarCategorias(); // precisa importar e instanciar
                        if (categorias.length === 0) {
                            console.log("⚠️ Nenhuma categoria encontrada. Crie uma antes de adicionar um produto.");
                            break;
                        }
                    
                        const novaCategoria = await inquirer.prompt([
                            {
                                type: "list",
                                name: "categoriaId",
                                message: "Escolha a categoria do produto:",
                                choices: categorias.map((cat) => ({
                                    name: `${cat.nome} (${cat.descricao})`,
                                    value: cat.id,
                                })),
                            }
                        ]);
                    
                        const novoProduto = await inquirer.prompt([
                            { type: "input", name: "nome", message: "Nome do Produto:" },
                            { type: "input", name: "descricao", message: "Descrição:" },
                            { type: "number", name: "preco", message: "Preço:" },
                            { type: "number", name: "quantidade", message: "Quantidade em estoque:" }
                        ]);
                    
                        await produtoService.criarProduto({ ...novoProduto, categoriaId: novaCategoria.categoriaId });
                        console.log("✅ Produto adicionado!");
                        break;
                    
                case "Atualizar Produto":
                    const { id } = await inquirer.prompt([
                        { type: "input", name: "id", message: "ID do Produto a atualizar:" }
                    ]);
                    const atualizacoes = await inquirer.prompt([
                        { type: "input", name: "nome", message: "Novo nome (deixe em branco para manter o mesmo):" },
                        { type: "input", name: "descricao", message: "Nova descrição:" },
                        { type: "input", name: "preco", message: "Novo preço:" }
                    ]);
                    await produtoService.atualizarProduto(parseInt(id), atualizacoes);
                    console.log("Produto atualizado!");
                    break;
                case "Remover Produto":
                    const { idRemover } = await inquirer.prompt([
                        { type: "input", name: "idRemover", message: "ID do Produto a remover:" }
                    ]);
                    await produtoService.deletarProduto(parseInt(idRemover));
                    console.log("Produto removido!");
                    break;
                case "Voltar":
                    return;
            }
        }
    }
}
