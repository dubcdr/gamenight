import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432', 10),
      username: process.env.DATABASE_USER || 'gamenight',
      password: process.env.DATABASE_PASSWORD || 'gamenight',
      database: process.env.DATABASE_NAME || 'gamenight',
      autoLoadEntities: true,
      synchronize: false, // Always use migrations in production
      logging: process.env.NODE_ENV === 'development',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
