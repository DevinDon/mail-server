import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import Content from './content.entity';

@Entity()
export class Mail extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'char',
    length: 255,
    nullable: false,
    default: 'Unknown',
    comment: 'Mail from'
  })
  from: string;

  @Column({
    type: 'char',
    length: 255,
    nullable: false,
    default: 'You',
    comment: 'Mail to'
  })
  to: string;

  @Column({
    type: 'datetime',
    nullable: false,
    comment: 'Mail sent date'
  })
  date: string;

  @Column({
    type: 'char',
    length: 255,
    nullable: false,
    default: 'Untitled',
    comment: 'Mail subject'
  })
  subject: string;

  @OneToOne(type => Content)
  @JoinColumn()
  content: Content;

}

export default Mail;
