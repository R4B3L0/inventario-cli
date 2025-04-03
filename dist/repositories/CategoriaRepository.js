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
exports.CategoriaRepository = void 0;
const ormconfig_1 = require("../ormconfig");
const Categoria_1 = require("../entities/Categoria");
class CategoriaRepository {
    constructor() {
        this.repo = ormconfig_1.AppDataSource.getRepository(Categoria_1.Categoria);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.find({ relations: ["produtos"] });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.findOne({ where: { id }, relations: ["produtos"] });
        });
    }
    create(categoria) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repo.save(categoria);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repo.update(id, data);
            return yield this.findById(id);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repo.delete(id);
        });
    }
}
exports.CategoriaRepository = CategoriaRepository;
