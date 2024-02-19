import { Module } from '@nestjs/common';

import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersService, PrismaService],
})
export class AuthModule {}
