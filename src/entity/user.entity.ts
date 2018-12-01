import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn({
    comment: 'User ID'
  })
  id: number;

  @Column({
    type: 'char',
    length: 64,
    nullable: false,
    comment: 'User name, content of email address'
  })
  name: string;

  @Column({
    type: 'char',
    length: 64,
    nullable: false,
    comment: 'User password'
  })
  password: string;

  @Column({
    type: 'tinyint',
    default: false,
    nullable: false,
    comment: 'This account is disabled or not'
  })
  disabled: boolean;

  @Column({
    type: 'char',
    length: 128,
    nullable: true,
    comment: 'User description'
  })
  description: string;

}

export default User;
