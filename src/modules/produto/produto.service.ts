import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.entity";

@Injectable()
export class ProdutoService {
    
    async findAll(): Promise<Produto[]> {
        return Produto.find({order: {id: 'ASC'}});
        // consultar o banco de dados e retornar a lista de produtos
    }
    async findOne(id: number): Promise<Produto|null> {
        return Produto.findOne({
             where: { id },
            select: {
                id: true,
                nome: true,
                descricao: true,
                preco: true,
                quantidade: true,
                ativo: true,
                criadoEm: true,
            } 
        });
        // consultar o banco de dados e retornar um produto específico pelo ID
    }

    async create(dados: any): Promise<Produto> {
        const preco = parseFloat(dados.preco.replace(',', '.'));
        const quantidade = parseInt(dados.quantidade, 10);

        const produto = Produto.create({ ...dados, preco, quantidade });
        
        return produto.save();
        // criar um novo produto no banco de dados com os dados fornecidos
    }

    async update(id: number, dados: any): Promise<Produto | null> {
        const produto = await this.findOne(id);
        if (!produto) {
            return null;
        }
        const preco = parseFloat(dados.preco.replace(',', '.'));
        const quantidade = parseInt(dados.quantidade, 10);
        
        Object.assign(produto, { ...dados, preco, quantidade });
        return produto.save();
        // atualizar um produto existente no banco de dados com os dados fornecidos
    }

    async remove(id: number): Promise<Produto | null> {
        const produto = await this.findOne(id);
        if(!produto) {
            return null;
        }
        return produto.remove();
        // remover um produto do banco de dados pelo ID
    }

}