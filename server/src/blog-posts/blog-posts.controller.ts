import { Blog } from 'src/data-access/mongo-schema';
import { BlogPostsService } from './blog-posts.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('blog-posts')
export class BlogPostsController {
    constructor(private blogService: BlogPostsService){

    }

    @Get()
    async getPosts(){
         let result = await this.blogService.getBlogs();
         return result;
    }

    @Post()
    async createPost(@Body() blog: Blog){
        return await this.blogService.createBlog(blog);
    }
}


