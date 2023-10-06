import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

const SequelizeModuleImport = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: 'mypassword',
  database: 'mydatabase',
  models: [],
});

@Module({
  imports: [SequelizeModuleImport, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
