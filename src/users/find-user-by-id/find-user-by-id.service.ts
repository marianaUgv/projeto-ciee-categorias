import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from '../user.repository';

@Injectable()
export class FindUserByIdService {
    constructor(
        private readonly usersRepository : UsersRepository
    ) { }
    async execute(id: number) {
        const category = await this.usersRepository.findById(id)
        if (!category) return new NotFoundException('Usuário não encontrado');
        return category;
    }
}
