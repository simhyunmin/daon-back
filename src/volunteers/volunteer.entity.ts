import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('volunteers')
export class Volunteer {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: string;

  @Column()
  location: string;
} 