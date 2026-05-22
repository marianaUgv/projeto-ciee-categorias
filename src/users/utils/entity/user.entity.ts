import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Accounts } from '../../../account/models/entity/account.entity';
import { Category } from '../../../categories/utils/category.entity';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({length:120})
    name!:string;
    
    @Column('text')
    email!:string;

    @Column('text')
    password!:string;

    @OneToMany(()=> Accounts, (account)=> account.user)
    accounts?: Accounts[]

    @OneToMany(()=> Category, (account)=> account.user)
    categorys?: Category[]

    @CreateDateColumn({name: 'createdat'})
    createdAt!: Date;

    @UpdateDateColumn({name :'updatedat'})
    updatedAt?: Date;
}
