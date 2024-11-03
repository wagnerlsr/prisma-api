import { Post } from '@prisma/client';

export class PostEntity implements Post {
  authorId: number | null;
  content: string | null;
  createdAt: Date;
  id: number;
  published: boolean;
  title: string;
  updatedAt: Date;
}
