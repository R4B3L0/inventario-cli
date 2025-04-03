"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventario = void 0;
const categoria_1 = require("./categoria");
const produto_1 = require("./produto");
class Inventario {
    constructor() {
        this.categorias = [];
        this.produtos = [];
        this.categoriaId = 1;
        this.produtoId = 1;
    }
    adicionarCategoria(nome, descricao) {
        //valida que o nome nao pode estar vazio
        if (!nome.trim()) {
            console.log("Erro: O nome da categoria não pode estar vazio.");
            return null;
        }
        //valida que nome nao pode ser duplicado
        if (this.categorias.some((cat) => cat.nome.toLowerCase() === nome.toLowerCase())) {
            console.log("Erro: Já existe uma categoria com este nome.");
            return null;
        }
        const categoria = new categoria_1.Categoria(this.categoriaId++, nome, descricao);
        this.categorias.push(categoria);
        return categoria;
    }
    listarCategorias() {
        return this.categorias;
    }
    removerCategoria(id) {
        const categoriaIndex = this.categorias.findIndex((cat) => cat.id === id);
        if (categoriaIndex === -1) {
            console.log("Erro: Categoria não encontrada.");
            return false;
        }
        // nao pode remover categoria se houver produtos vinculados a ela
        if (this.produtos.some((prod) => prod.categoriaId === id)) {
            console.log("Erro: Não é possível remover a categoria. Existem produtos associados a ela.");
            return false;
        }
        this.categorias.splice(categoriaIndex, 1);
        return true;
    }
    adicionarProduto(nome, descricao, preco, quantidade, categoriaId) {
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
        const categoriaExiste = this.categorias.some((cat) => cat.id === categoriaId);
        if (!categoriaExiste) {
            console.log("Erro: Categoria não encontrada.");
            return null;
        }
        //valida se tem 2 produtos iguais na mesma categoria
        if (this.produtos.some((prod) => prod.nome.toLowerCase() === nome.toLowerCase() &&
            prod.categoriaId === categoriaId)) {
            console.log("Erro: Já existe um produto com este nome nesta categoria.");
            return null;
        }
        const produto = new produto_1.Produto(this.produtoId++, nome, descricao, preco, quantidade, categoriaId);
        this.produtos.push(produto);
        return produto;
    }
    listarProdutos() {
        return this.produtos;
    }
    removerProduto(id) {
        const produtoIndex = this.produtos.findIndex((prod) => prod.id === id);
        if (produtoIndex === -1) {
            console.log("Erro: Produto não encontrado.");
            return false;
        }
        this.produtos.splice(produtoIndex, 1);
        return true;
    }
}
exports.Inventario = Inventario;
