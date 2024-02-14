import { Injectable } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';

import { ApiError } from 'src/errors';

import { PrismaService } from '../prisma.service';

import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(user: CreateUserDto): Promise<UserModel> {
    const storedUser = await this.prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });
    if (storedUser) {
      // TODO: it is an error. Not an exception. How could be implemented instead of throwing it?
      throw ApiError.BadRequest(
        'This email has already been registered. Try another one.',
      );
    }

    return this.prisma.user.create({
      data: user,
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
