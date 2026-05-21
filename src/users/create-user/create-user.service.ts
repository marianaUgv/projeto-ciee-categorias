import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../utils/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class CreateUserService {
    async execute(createUserDto: CreateUserDto) {
        const { name, email, password } = createUserDto;

        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
        const newUser = {
            name,
            email,
            password: hashedPassword,
        };

        return newUser; 
    }
}
