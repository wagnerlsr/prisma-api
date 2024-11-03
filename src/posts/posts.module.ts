import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsRepository } from './repositories/posts.repository';

@Module({
  controllers: [PostsController],
  providers: [PrismaService, PostsService, PostsRepository],
})
export class PostsModule {}
