export class Categoria {
  id: number;
  nome: string;
  descricao: string;
  dataCriacao: Date;

  constructor(id: number, nome: string, descricao: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.dataCriacao = new Date();
  }
}
