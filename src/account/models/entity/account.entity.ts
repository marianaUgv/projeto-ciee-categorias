import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../../users/utils/entity/user.entity";
import { ApiProperty } from "@nestjs/swagger";
import { AccountType } from "../../types/account-type.enum";

@Entity('accounts')
export class Accounts {
    @ApiProperty({ example: 1, description: 'ID único da conta bancária' })
    @PrimaryGeneratedColumn()
    id!: number;

    @ApiProperty({ example: 'Nubank Corrente', description: 'Nome personalizado da conta' })
    @Column({ length: 120 })
    name!: string;

    @ApiProperty({ example: AccountType.CHECKING, enum: AccountType, description: 'Tipo da conta financeira' })
    @Column({ type: 'enum', enum: AccountType, default: AccountType.CHECKING })
    type!: string;

    @ApiProperty({ example: 1500.50, description: 'Saldo inicial da conta' })
    @Column({ name: 'initial_balance', type: 'decimal', precision: 10, scale: 2, default: 0 })
    @Column()
    initialBalance!: number;

    @ManyToOne(() => User, (user) => user.accounts)
    @JoinColumn({ name: 'user_id' })
    user?: User;

    @ApiProperty({ example: '2026-03-24T12:00:00.000Z' })
    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @ApiProperty({ example: '2026-03-24T12:00:00.000Z' })
    @UpdateDateColumn({ name: 'updated_at' })
    updated_at!: Date;

}