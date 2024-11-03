import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { UserRepository } from './repositories/user.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService, UserRepository],
})
export class UsersModule {}
