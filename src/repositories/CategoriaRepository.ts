import { Repository } from "typeorm";
import { AppDataSource } from "../ormconfig";
import { Categoria } from "../entities/Categoria";
//endpoint
export class CategoriaRepository {
    private repo: Repository<Categoria>;

    constructor() {
        this.repo = AppDataSource.getRepository(Categoria);
    }

    async findAllComProdutos(): Promise<Categoria[]> {
        return this.repo.find({
            relations: ["produtos"],
        });
    }

    async findAll(): Promise<Categoria[]> {
        return await this.repo.find({ relations: ["produtos"] });
    }

    async findById(id: number): Promise<Categoria | null> {
        return await this.repo.findOne({ where: { id }, relations: ["produtos"] });
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return await this.repo.save(categoria);
    }

    async update(id: number, data: Partial<Categoria>): Promise<Categoria | null> {
        await this.repo.update(id, data);
        return await this.findById(id);
    }

    async delete(id: number): Promise<void> {
        await this.repo.delete(id);
    }
}
