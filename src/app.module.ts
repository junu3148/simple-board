import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { LoggingMiddleware } from './middleware/logging.middleware';
import ConfigModule from './config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest',
      password: '150321',
      database: 'postgres',
      synchronize: false,
      logging: false,
      entities: [__dirname + '/**/*.entity.{.ts,.js}'],
      migrations: [],
      subscribers: [],
    }),
    BoardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: any) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
