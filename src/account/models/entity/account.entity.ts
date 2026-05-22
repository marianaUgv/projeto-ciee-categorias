import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Accounts {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 120})
    name!: string;

    @Column()
    type!: string;

    @Column()
    initial_Balance!: number;
}