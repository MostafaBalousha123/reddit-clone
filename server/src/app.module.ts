import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import config from './core/database/connection';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...config,
      sync: { force: false },
      autoLoadModels: true,
      synchronize: true,
      models: [],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
