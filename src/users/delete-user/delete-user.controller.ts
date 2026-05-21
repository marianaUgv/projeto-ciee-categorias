import { Controller, Delete, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';

@Controller('delete-user')
export class DeleteUserController {
    constructor(private readonly deleteUserService: DeleteUserService) { }
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT) // Retorna o status 204 (Sem conteúdo) ao deletar com sucesso
    async remove(@Param('id') id: number) {
        await this.deleteUserService.execute(id);
    }
}
