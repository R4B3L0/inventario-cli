import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Produto } from "./Produto";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id!: number; // Adicionamos "!"

    @Column()
    nome!: string; // Adicionamos "!"

    @Column()
    descricao!: string; // Adicionamos "!"

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date; // Adicionamos "!"

    @OneToMany(() => Produto, produto => produto.categoria)
    produtos!: Produto[]; // Adicionamos "!"
}
