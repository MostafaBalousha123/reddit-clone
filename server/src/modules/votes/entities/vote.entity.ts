import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Post } from '../../posts/entities/post.entity';
import { User } from '../../auth/entities/auth.entity';

@Table
export class Vote extends Model {
  @ForeignKey(() => User)
  @Column({
    primaryKey: true,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Post)
  @Column({
    primaryKey: true,
  })
  postId: number;

  @BelongsTo(() => Post)
  post: Post;

  @Column({ type: DataType.NUMBER, defaultValue: 0 })
  state: number;
}
