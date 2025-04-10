import { Produto } from "../entities/Produto";
import { ProdutoRepository } from "../repositories/ProdutoRepository";
import { AppDataSource } from "../ormconfig";
import { Categoria } from "../entities/Categoria";

export class ProdutoService {
    private produtoRepository: ProdutoRepository;

    constructor() {
        this.produtoRepository = new ProdutoRepository();
    }

    async listarProdutos(): Promise<any[]> {
        const produtos = await this.produtoRepository.findAllComCategoria();
    
        return produtos.map(produto => ({
            id: produto.id,
            nome: produto.nome,
            descricao: produto.descricao,
            preco: produto.preco,
            quantidade: produto.quantidade,
            categoria: produto.categoria?.nome || "Sem categoria",
            criadoEm: produto.dataCriacao,
            atualizadoEm: produto.dataAtualizacao,
        }));
    }
    

    async buscarProdutoPorId(id: number): Promise<Produto | null> {
        return await this.produtoRepository.findById(id);
    }

    async criarProduto(produtoData: any): Promise<Produto> {
        const categoriaRepository = AppDataSource.getRepository(Categoria);

        const categoria = await categoriaRepository.findOneBy({ id: produtoData.categoriaId });

        if (!categoria) {
            throw new Error("Categoria não encontrada.");
        }

        const produto = {
            nome: produtoData.nome,
            descricao: produtoData.descricao,
            preco: produtoData.preco,
            quantidade: produtoData.quantidade,
            categoria: categoria
        } as Produto;

        return await this.produtoRepository.create(produto);
    }

    async atualizarProduto(id: number, data: Partial<Produto>): Promise<Produto | null> {
        return await this.produtoRepository.update(id, data);
    }

    async deletarProduto(id: number): Promise<void> {
        await this.produtoRepository.delete(id);
    }
}
