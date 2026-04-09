import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.entity";

@Injectable()
export class ProdutoService {
    async findAll(): Promise<Produto[]> {
        return Produto.find({order: {id: 'ASC'}});
        // consultar o banco de dados e retornar a lista de produtos
    }
}