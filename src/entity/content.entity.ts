import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Content extends BaseEntity {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'text',
    nullable: true,
    comment: 'Mail content'
  })
  public content: string;

}

export default Content;
