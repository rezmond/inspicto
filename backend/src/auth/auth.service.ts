import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { type UserModel, UsersService } from '../users';

import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async create(createAuthDto: CreateAuthDto) {
    const user = await this.usersService.create(createAuthDto);
    return user;
  }

  async storeSession(sessionId: string, userId: string) {
    console.log(`Save sessionID "${sessionId}" for user with id "${userId}"`);
  }

  async validateUser(email: string, password: string): Promise<UserModel> {
    const user = await this.usersService.findByEmail(email);

    if (!user || bcrypt.compareSync(password, user?.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
