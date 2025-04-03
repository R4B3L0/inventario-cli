"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const ProdutoRepository_1 = require("../repositories/ProdutoRepository");
class ProdutoService {
    constructor() {
        this.produtoRepository = new ProdutoRepository_1.ProdutoRepository();
    }
    listarProdutos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.produtoRepository.findAll();
        });
    }
    buscarProdutoPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.produtoRepository.findById(id);
        });
    }
    criarProduto(produto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.produtoRepository.create(produto);
        });
    }
    atualizarProduto(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.produtoRepository.update(id, data);
        });
    }
    deletarProduto(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.produtoRepository.delete(id);
        });
    }
}
exports.ProdutoService = ProdutoService;
