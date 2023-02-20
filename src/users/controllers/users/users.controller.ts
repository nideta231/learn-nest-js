import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/Dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    console.log(sortDesc);
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
  getUsersPostsComments() {
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
                likes: 5,
              },
            ],
          },
        ],
      },
    ];
  }

  @Post("create")
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id/:postId')
  getUserById(@Param('id', ParseIntPipe) id: string){
    console.log(id);
    return { id };
  }
}
