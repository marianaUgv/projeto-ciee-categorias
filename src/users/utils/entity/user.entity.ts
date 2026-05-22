import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Accounts } from '../../../account/models/entity/account.entity';
import { Category } from '../../../categories/utils/category.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
    @ApiProperty({ example: 1, description: 'ID único do usuário' })
    @PrimaryGeneratedColumn()
    id!:number;

    @ApiProperty({ example: 'Bananilson farofa', description: 'Nome completo do usuário' })
    @Column({length:120})
    name!:string;
    
    @ApiProperty({ example: 'bananilson@silva.com', description: 'E-mail único de acesso' })
    @Column('text', { unique: true })
    email!:string;

    @Column('text', { select: false })
    password!:string;

    @OneToMany(()=> Accounts, (account)=> account.user)
    accounts?: Accounts[]

    @OneToMany(()=> Category, (category)=> category.user)
    categorys?: Category[]

    @ApiProperty({ example: '2026-03-24T12:00:00.000Z' })
    @CreateDateColumn({name: 'createdat'})
    createdAt!: Date;

    @ApiProperty({ example: '2026-03-24T12:00:00.000Z' })
    @UpdateDateColumn({name :'updatedat'})
    updatedAt?: Date;
}
