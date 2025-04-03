import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Categoria } from "./Categoria";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id!: number; // Adicionamos "!"

    @Column()
    nome!: string; // Adicionamos "!"

    @Column()
    descricao!: string; // Adicionamos "!"

    @Column("decimal")
    preco!: number; // Adicionamos "!"

    @Column("int")
    quantidade!: number; // Adicionamos "!"

    @ManyToOne(() => Categoria, categoria => categoria.produtos)
    categoria!: Categoria; // Adicionamos "!"

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date; // Adicionamos "!"

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    dataAtualizacao!: Date; // Adicionamos "!"
}
