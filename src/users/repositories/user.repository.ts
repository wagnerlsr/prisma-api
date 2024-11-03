import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany({
      include: { posts: { select: { title: true, content: true } } },
    });
  }

  findOne(id: number): Promise<UserEntity> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }
  remove(id: number): Promise<UserEntity> {
    return this.prisma.user.delete({ where: { id } });
  }
}
