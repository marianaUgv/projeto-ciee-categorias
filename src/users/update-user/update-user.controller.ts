import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserDto } from '../utils/dto/update-user.dto';
import { UpdateUserService } from './update-user.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../utils/entity/user.entity';
@ApiTags('Usuarios')
@Controller('users')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) { }
  @ApiOperation({ summary: 'Atualizar dados de um usuário' })
  @ApiParam({ name: 'id', description: 'ID do usuário', type: Number })
  @ApiResponse({ status: 200, description: 'Usuário atualizado.', type: User })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.updateUserService.execute(id, updateUserDto);
  }
}
