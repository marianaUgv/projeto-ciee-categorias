import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../utils/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../utils/entity/user.entity';
import { Repository } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Usuarios')
@Injectable()
export class CreateUserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }
    async execute(createUserDto: CreateUserDto) {
        const { name, email, password } = createUserDto;

        const emailExists = await this.userRepository.findOne({ where: { email } });
        if (emailExists) {
            throw new ConflictException('Este e-mail já está em uso.');
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = {
            name,
            email,
            password: hashedPassword,
        };

        return this.userRepository.create(newUser);
    }
}
