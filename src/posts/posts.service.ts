import { Injectable } from '@nestjs/common';

import { NotFoundError } from '../common/errors/types/NotFoundError';
import { UserRepository } from '../users/repositories/user.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  create(createPostDto: CreatePostDto) {
    return this.postsRepository.create(createPostDto);
  }

  findAll() {
    return this.postsRepository.findAll();
  }

  async findOne(id: number) {
    const post = await this.postsRepository.findOne(id);

    if (!post) throw new NotFoundError('Post não encontrado.');

    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postsRepository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.postsRepository.remove(id);
  }
}
