import { Categoria } from "./categoria";
import { Produto } from "./produto";

export class Inventario {
  private categorias: Categoria[] = [];
  private produtos: Produto[] = [];
  private categoriaId = 1;
  private produtoId = 1;

  adicionarCategoria(nome: string, descricao: string): Categoria | null {
    //valida que o nome nao pode estar vazio
    if (!nome.trim()) {
      console.log("Erro: O nome da categoria não pode estar vazio.");
      return null;
    }

    //valida que nome nao pode ser duplicado
    if (
      this.categorias.some(
        (cat) => cat.nome.toLowerCase() === nome.toLowerCase()
      )
    ) {
      console.log("Erro: Já existe uma categoria com este nome.");
      return null;
    }

    const categoria = new Categoria(this.categoriaId++, nome, descricao);
    this.categorias.push(categoria);
    return categoria;
  }

  listarCategorias(): Categoria[] {
    return this.categorias;
  }

  removerCategoria(id: number): boolean {
    const categoriaIndex = this.categorias.findIndex((cat) => cat.id === id);

    if (categoriaIndex === -1) {
      console.log("Erro: Categoria não encontrada.");
      return false;
    }

    // nao pode remover categoria se houver produtos vinculados a ela
    if (this.produtos.some((prod) => prod.categoriaId === id)) {
      console.log(
        "Erro: Não é possível remover a categoria. Existem produtos associados a ela."
      );
      return false;
    }

    this.categorias.splice(categoriaIndex, 1);
    return true;
  }

  adicionarProduto(
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number,
    categoriaId: number
  ): Produto | null {
    // valida seo nome esta vazio
    if (!nome.trim()) {
      console.log("Erro: O nome do produto não pode estar vazio.");
      return null;
    }

    // valida que o preço deve ser positivo
    if (preco <= 0) {
      console.log("Erro: O preço deve ser um valor positivo.");
      return null;
    }
    // quantidate tbm
    if (quantidade < 0) {
      console.log("Erro: A quantidade não pode ser negativa.");
      return null;
    }

    //valida se a categoria ja esxite burro
    const categoriaExiste = this.categorias.some(
      (cat) => cat.id === categoriaId
    );
    if (!categoriaExiste) {
      console.log("Erro: Categoria não encontrada.");
      return null;
    }

    //valida se tem 2 produtos iguais na mesma categoria
    if (
      this.produtos.some(
        (prod) =>
          prod.nome.toLowerCase() === nome.toLowerCase() &&
          prod.categoriaId === categoriaId
      )
    ) {
      console.log("Erro: Já existe um produto com este nome nesta categoria.");
      return null;
    }

    const produto = new Produto(
      this.produtoId++,
      nome,
      descricao,
      preco,
      quantidade,
      categoriaId
    );
    this.produtos.push(produto);
    return produto;
  }

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  removerProduto(id: number): boolean {
    const produtoIndex = this.produtos.findIndex((prod) => prod.id === id);

    if (produtoIndex === -1) {
      console.log("Erro: Produto não encontrado.");
      return false;
    }

    this.produtos.splice(produtoIndex, 1);
    return true;
  }
}
