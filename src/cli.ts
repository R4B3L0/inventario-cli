import * as readline from "readline-sync";
import { Inventario } from "./inventario";

const inventario = new Inventario();

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
  } else {
    console.table(categorias);
  }
}

function removerCategoria() {
  listarCategorias();
  const id = readline.questionInt("ID da categoria para remover: ");
  if (inventario.removerCategoria(id)) {
    console.log("Categoria removida com sucesso!");
  } else {
    console.log(
      "Erro: Categoria não encontrada ou possui produtos associados."
    );
  }
}

function adicionarProduto() {
  listarCategorias();
  const nome = readline.question("Nome do produto: ");
  const descricao = readline.question("Descrição: ");
  const preco = readline.questionFloat("Preço: ");
  const quantidade = readline.questionInt("Quantidade: ");
  const categoriaId = readline.questionInt("ID da categoria: ");

  const produto = inventario.adicionarProduto(
    nome,
    descricao,
    preco,
    quantidade,
    categoriaId
  );
  if (produto) {
    console.log(`Produto '${produto.nome}' adicionado com sucesso!`);
  } else {
    console.log("Erro: Categoria não encontrada.");
  }
}

function listarProdutos() {
  const produtos = inventario.listarProdutos();
  if (produtos.length === 0) {
    console.log("Nenhum produto cadastrado.");
  } else {
    console.table(produtos);
  }
}

function removerProduto() {
  listarProdutos();
  const id = readline.questionInt("ID do produto para remover: ");
  if (inventario.removerProduto(id)) {
    console.log("Produto removido com sucesso!");
  } else {
    console.log("Erro: Produto não encontrado.");
  }
}

// inicia o programa npx ts-node src/cli.ts
menu();
