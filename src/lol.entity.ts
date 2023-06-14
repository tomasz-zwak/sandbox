import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lol extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;
}
