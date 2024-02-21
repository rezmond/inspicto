import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma.service';

import { CreateUserDto, UpdateUserDto } from './dto';
import { UserModel } from './users.types';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(user: CreateUserDto): Promise<UserModel> {
    const storedUser = await this.findByEmail(user.email);
    if (storedUser) {
      // TODO: it is an error. Not an exception. How could it be implemented instead of throwing it?
      throw new ConflictException('This email has already been registered.');
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(user.password, salt);
    return this.prisma.user.create({
      data: {
        ...user,
        password: passwordHash,
      },
    });
  }

  findByEmail(email: string): Promise<UserModel | null> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
