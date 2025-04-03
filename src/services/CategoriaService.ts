import { Categoria } from "../entities/Categoria";
import { CategoriaRepository } from "../repositories/CategoriaRepository";

export class CategoriaService {
    private categoriaRepository: CategoriaRepository;

    constructor() {
        this.categoriaRepository = new CategoriaRepository();
    }

    async listarCategorias(): Promise<Categoria[]> {
        return await this.categoriaRepository.findAll();
    }

    async buscarCategoriaPorId(id: number): Promise<Categoria | null> {
        return await this.categoriaRepository.findById(id);
    }

    async criarCategoria(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.create(categoria);
    }

    async atualizarCategoria(id: number, data: Partial<Categoria>): Promise<Categoria | null> {
        return await this.categoriaRepository.update(id, data);
    }

    async deletarCategoria(id: number): Promise<void> {
        await this.categoriaRepository.delete(id);
    }
}
