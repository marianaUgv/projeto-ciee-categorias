import { Controller, Delete, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { DeleteUserService } from './delete-user.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Usuarios')
@Controller('delete-user')
export class DeleteUserController {
    constructor(private readonly deleteUserService: DeleteUserService) { }
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number) {
        await this.deleteUserService.execute(id);
    }
}
