import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../utils/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from '../utils/dto/update-user.dto';
@Injectable()
export class UpdateUserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }
    async execute(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findOne({
            where: {
                id
            }
        });
        if (updateUserDto.email && updateUserDto.email !== user?.email) {
            const emailExists = await this.userRepository.findOne({ where: { email: updateUserDto.email } });
            if (emailExists) {
                throw new ConflictException('Este e-mail já está sendo usado por outro usuário.');
            }
        }
        if (!user) {
            throw new NotFoundException('Usuário não encontrado')
        }
        if (updateUserDto.password) {
            const salt = await bcrypt.genSalt(10);
            updateUserDto.password = await bcrypt.hash(updateUserDto.password, salt);
        }

        const updatedUser = this.userRepository.merge(user, updateUserDto);
        return await this.userRepository.save(updatedUser);
    }
}
