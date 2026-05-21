import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../utils/entity/user.entity';

@Injectable()
export class FindAllUsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }
    async execute(): Promise<User[]> {
        return await this.userRepository.find();
    }
}
