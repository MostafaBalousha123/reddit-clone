import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Post } from '../../posts/entities/post.entity';
@Table
export class Topic extends Model {
  @Column({
    type: DataType.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @HasMany(() => Post, { onDelete: 'CASCADE' })
  posts: Post[];
}
