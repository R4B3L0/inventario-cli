import { Produto } from "../entities/Produto";
import { ProdutoRepository } from "../repositories/ProdutoRepository";

export class ProdutoService {
    private produtoRepository: ProdutoRepository;

    constructor() {
        this.produtoRepository = new ProdutoRepository();
    }

    async listarProdutos(): Promise<Produto[]> {
        return await this.produtoRepository.findAll();
    }

    async buscarProdutoPorId(id: number): Promise<Produto | null> {
        return await this.produtoRepository.findById(id);
    }

    async criarProduto(produto: Produto): Promise<Produto> {
        return await this.produtoRepository.create(produto);
    }

    async atualizarProduto(id: number, data: Partial<Produto>): Promise<Produto | null> {
        return await this.produtoRepository.update(id, data);
    }

    async deletarProduto(id: number): Promise<void> {
        await this.produtoRepository.delete(id);
    }
}
