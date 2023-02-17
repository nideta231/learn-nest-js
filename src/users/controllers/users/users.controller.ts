import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'Nath', email: 'nath231@nath.com' }];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Nath',
        email: 'nath231@nath.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments(){
    return [
      {
        posts: [
          {
            id: 1,
            title: 'Post 1',
            comments: [
              {
                id: 1,
                postId: 1,
                userId: 1,
                username: 'Nath',
                comment: 'Hey, i am Nath!!',
                likes: 5
              },
            ],
          },
        ],
      },
    ];
  }
}
