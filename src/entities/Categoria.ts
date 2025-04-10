import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Produto } from "./Produto";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    descricao!: string;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date;

    @OneToMany(() => Produto, produto => produto.categoria)
    produtos!: Produto[]; 

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    dataAtualizacao!: Date;
}
