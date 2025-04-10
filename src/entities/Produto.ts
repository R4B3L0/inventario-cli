import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Categoria } from "./Categoria";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    descricao!: string;

    @Column("decimal")
    preco!: number;

    @Column("int")
    quantidade!: number;

    @ManyToOne(() => Categoria, categoria => categoria.produtos, {eager: true})
    categoria!: Categoria;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    dataAtualizacao!: Date;
}
