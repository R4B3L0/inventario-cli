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
exports.CategoriaService = void 0;
const CategoriaRepository_1 = require("../repositories/CategoriaRepository");
class CategoriaService {
    constructor() {
        this.categoriaRepository = new CategoriaRepository_1.CategoriaRepository();
    }
    listarCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoriaRepository.findAll();
        });
    }
    buscarCategoriaPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoriaRepository.findById(id);
        });
    }
    criarCategoria(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoriaRepository.create(categoria);
        });
    }
    atualizarCategoria(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoriaRepository.update(id, data);
        });
    }
    deletarCategoria(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.categoriaRepository.delete(id);
        });
    }
}
exports.CategoriaService = CategoriaService;
