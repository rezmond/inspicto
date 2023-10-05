import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { User } from './users/entities/user.entity';

const TypOrmModuleImport = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: 'mypassword',
  database: 'mydatabase',
  // entities: [User],
  autoLoadEntities: true,
  synchronize: process.env.NODE_ENV === 'development',
});
@Module({
  imports: [TypOrmModuleImport, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
