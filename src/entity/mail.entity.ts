import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import Content from './content.entity';

@Entity()
export class Mail extends BaseEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'char',
    length: 255,
    nullable: false,
    default: 'Unknown',
    comment: 'Mail from'
  })
  public from: string;

  @Column({
    type: 'char',
    length: 255,
    nullable: false,
    default: 'You',
    comment: 'Mail to'
  })
  public to: string;

  @Column({
    type: 'datetime',
    nullable: false,
    comment: 'Mail sent date'
  })
  public date: string;

  @Column({
    type: 'char',
    length: 255,
    nullable: false,
    default: 'Untitled',
    comment: 'Mail subject'
  })
  public subject: string;

  @OneToOne(type => Content)
  @JoinColumn()
  public content: Content;

}

export default Mail;
