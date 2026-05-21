import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

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

    @CreateDateColumn({name: 'createdat'})
    createdAt!: Date;

    @UpdateDateColumn({name :'updatedat'})
    updatedAt?: Date;
}
