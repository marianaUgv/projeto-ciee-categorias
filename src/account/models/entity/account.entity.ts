import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../../users/utils/entity/user.entity";

@Entity()
export class Accounts {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 120 })
    name!: string;

    @Column()
    type!: string;

    @Column()
    initial_Balance!: number;

    @ManyToOne(() => User, (user) => user.accounts)
    user?: User;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at!: Date;

}