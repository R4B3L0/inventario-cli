export class Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  categoriaId: number;
  dataCriacao: Date;
  dataAtualizacao: Date;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number,
    categoriaId: number
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidade = quantidade;
    this.categoriaId = categoriaId;
    this.dataCriacao = new Date();
    this.dataAtualizacao = new Date();
  }
}
