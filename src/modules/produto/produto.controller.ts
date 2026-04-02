import { Controller, Get, Render } from "@nestjs/common";

@Controller('produtos')
export class ProdutoController {
    @Get()
    @Render('produto/inicial')
    inicial(): object {
        return {
            titulo: 'Consulta de Produtos'
        }
    }
}