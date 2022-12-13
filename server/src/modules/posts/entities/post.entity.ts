import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Topic } from '../../topics/entities/topic.entity';
import { User } from '../../auth/entities/auth.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { Vote } from '../../votes/entities/vote.entity';

@Table
export class Post extends Model {
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
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  content: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  image: string;

  @ForeignKey(() => Topic)
  @Column
  topicId: number;

  @BelongsTo(() => Topic)
  topic: Topic;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Comment, { onDelete: 'CASCADE' })
  comments: Comment[];

  @HasMany(() => Comment, { onDelete: 'CASCADE' })
  HasOne: Comment[];

  @HasMany(() => Vote, { onDelete: 'CASCADE' })
  votes: Vote[];
}
