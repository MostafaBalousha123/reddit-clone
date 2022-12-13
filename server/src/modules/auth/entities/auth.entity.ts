import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Post } from '../../posts/entities/post.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { Save } from '../../saves/entities/save.entity';
import { Vote } from '../../votes/entities/vote.entity';

@Table
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  gender: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  age: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  profileImg: string;

  @HasMany(() => Post, { onDelete: 'CASCADE' })
  posts: Post[];

  @HasMany(() => Comment, { onDelete: 'CASCADE' })
  comments: Comment[];

  @HasMany(() => Save, { onDelete: 'CASCADE' })
  saves: Save[];

  @HasMany(() => Vote, { onDelete: 'CASCADE' })
  votes: Vote[];
}
