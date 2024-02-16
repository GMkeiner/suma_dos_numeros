import { Controller, Get, Param } from '@nestjs/common';

@Controller('sum')
export class SumController {
    @Get(':A/:B')
    Sum(@Param('A') A:string, @Param('B') B: string) {
        let resultado = parseInt(A) + parseInt(B);
        return `<h1>La suma de ${A} y ${B} es de :  ${resultado} `;
  }
}
