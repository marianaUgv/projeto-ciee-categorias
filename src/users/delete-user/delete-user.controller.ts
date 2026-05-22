import { Controller, Delete, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Usuarios')
@Controller('users')
export class DeleteUserController {
    constructor(private readonly deleteUserService: DeleteUserService) { }
    @Delete('delete/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Deletar um usuário' })
    @ApiParam({ name: 'id', description: 'ID do usuário', type: Number })
    @ApiResponse({ status: 200, description: 'Usuário removido com sucesso.' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
    async remove(@Param('id') id: number) {
        await this.deleteUserService.execute(id);
    }
}
