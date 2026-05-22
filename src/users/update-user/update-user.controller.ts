import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserDto } from '../utils/dto/update-user.dto';
import { UpdateUserService } from './update-user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Usuarios')
@Controller('update-user')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) { }
  @ApiResponse({ status: 200, description: 'Usuário editado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.updateUserService.execute(id, updateUserDto);
  }
}
