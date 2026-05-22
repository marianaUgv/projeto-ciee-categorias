import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/utils/entity/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('categories')
export class Category {
  @ApiProperty({ example: 1, description: 'ID único da categoria' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'Alimentação', description: 'Nome descritivo da categoria' })
  @Column()
  name!: string;

  @ApiProperty({ example: '#FF5733', description: 'Cor em formato Hexadecimal para o front-end' })
  @Column()
  color!: string; 

  @ApiProperty({ example: 'utensils', description: 'Nome do ícone correspondente', required: false })
  @Column()
  icon!: string; 

  @ManyToOne(()=>User, (user)=> user.categorys)
  user?: User;

  @ApiProperty({ example: '2026-03-24T12:00:00.000Z' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @ApiProperty({ example: '2026-03-24T12:00:00.000Z' })
  @UpdateDateColumn({ name: 'updated_at' })
  updated_at!: Date;
}