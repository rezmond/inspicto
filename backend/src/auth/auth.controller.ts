import {
  Controller,
  Get,
  Post,
  Body,
  Session,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Session as ExpressSession } from 'express-session';

import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async create(
    @Body() createAuthDto: CreateAuthDto,
    @Session() session: ExpressSession,
  ) {
    const user = await this.authService.create(createAuthDto);
    await this.authService.storeSession(session.id, user.id);
    // TODO: Remove password from response
    return user;
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
