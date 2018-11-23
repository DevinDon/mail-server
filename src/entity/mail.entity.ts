import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mail extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 1024,
    comment: 'Mail from'
  })
  from: string;

  @Column({
    type: 'varchar',
    length: 1024,
    comment: 'Mail to'
  })
  to: string;

  @Column({
    type: 'datetime',
    comment: 'Mail sent date'
  })
  date: string;

  @Column({
    type: 'varchar',
    length: 2048,
    nullable: true,
    comment: 'Mail subject'
  })
  subject: string;

  @Column({
    type: 'varchar',
    length: 60000,
    nullable: true,
    comment: 'Mail content'
  })
  content: string;

}

export default Mail;
