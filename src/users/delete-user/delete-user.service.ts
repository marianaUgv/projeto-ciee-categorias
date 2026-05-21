import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {  Repository } from 'typeorm';
import { User } from '../utils/entity/user.entity';

@Injectable()
export class DeleteUserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }
    async execute(id: number): Promise<void> {
        const user = await this.userRepository.findOne({
            where:{id}
        }); 
        if(!user){
            throw NotFoundException
        }
        await this.userRepository.remove(user);
    }
}
