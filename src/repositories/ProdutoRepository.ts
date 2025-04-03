import { Repository } from "typeorm";
import { AppDataSource } from "../ormconfig";
import { Produto } from "../entities/Produto";

export class ProdutoRepository {
    private repo: Repository<Produto>;

    constructor() {
        this.repo = AppDataSource.getRepository(Produto);
    }

    async findAll(): Promise<Produto[]> {
        return await this.repo.find({ relations: ["categoria"] });
    }

    async findById(id: number): Promise<Produto | null> {
        return await this.repo.findOne({ where: { id }, relations: ["categoria"] });
    }

    async create(produto: Produto): Promise<Produto> {
        return await this.repo.save(produto);
    }

    async update(id: number, data: Partial<Produto>): Promise<Produto | null> {
        await this.repo.update(id, data);
        return await this.findById(id);
    }

    async delete(id: number): Promise<void> {
        await this.repo.delete(id);
    }
}
