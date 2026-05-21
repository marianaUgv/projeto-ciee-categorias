import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserDto } from '../utils/dto/update-user.dto';
import { UpdateUserService } from './update-user.service';

@Controller('update-user')
export class UpdateUserController {
    constructor(private readonly updateUserService : UpdateUserService) { }
    @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.updateUserService.execute(id, updateUserDto);
  }
}
