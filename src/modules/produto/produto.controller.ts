import { Body, Controller, Get, Param, Post, Redirect, Render } from "@nestjs/common";
import { ProdutoService } from "./produto.service";

@Controller('produtos')
export class ProdutoController {
    constructor(private produtoService: ProdutoService) { }

    @Get()
    @Render('produto/inicial')
    async inicial(): Promise<object> {
        const listaProdutos = await this.produtoService.findAll();

        return {
            titulo: 'Consulta de Produtos',
            produtos: listaProdutos
        }
    }

    @Get('criar')
    @Render('produto/formulario')
    async formularioCriar(): Promise<object> {
        return {
            titulo: 'Novo Produto',
            produto: {
                nome: '',
                descricao: '',
                preco: '0.00',
                quantidade: 0
            }
        };
    }

    @Post('criar')
    @Redirect('/produtos')
    async formularioCriarSalver(@Body() dados: any): Promise<void> {
        await this.produtoService.create(dados);
    }

    @Get(':id/editar')
    @Render('produto/formulario')
    async formularioEditar(@Param('id') id: number): Promise<object> {
        const produto = await this.produtoService.findOne(id);
        if (!produto) {
            throw new Error('Produto não encontrado');
        }
        return {
            titulo: 'Editar Produto',
            subtitulo: `Atualização do produto ${produto.nome}`,
            produto,
        };
    }

    @Post(':id/editar')
    @Redirect('/produtos')
    async formEditarSalvar(@Param('id') id: number, @Body() dados: any): Promise<void> {
        const produto = await this.produtoService.findOne(id);
        if (!produto) {
            throw new Error('Produto não encontrado');
        }
        await this.produtoService.update(id, dados);
    }



    @Get(':id/excluir')
    @Render('produto/remover')
    async formularioExcluir(@Param('id') id: number): Promise<object> {
        const produto = await this.produtoService.findOne(id);
        if (!produto) {
            throw new Error('Produto não encontrado');
        }
        return {
            titulo: 'Excluir Produto',
            subtitulo: `Confirmação de exclusão do produto ${produto.nome}`,
            produto,
        };
    }

    @Post(':id/excluir')
    @Redirect('/produtos')
    async formExcluirSalvar(@Param('id') id: number): Promise<void> {
        await this.produtoService.remove(id);
    }

    @Post(':id/remover')
    async remove(@Param('id') id: number): Promise<void> {
        await this.produtoService.remove(id);
    }


}