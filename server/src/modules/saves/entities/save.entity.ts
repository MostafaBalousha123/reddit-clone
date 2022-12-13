import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Post } from '../../posts/entities/post.entity';
import { User } from '../../auth/entities/auth.entity';

@Table
export class Save extends Model {
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
}
