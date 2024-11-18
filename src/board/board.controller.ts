import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('api/board')
export class BoardController {
    @Get()
    async getPosts() {
        return [
            {
                idx: 1,
                title: "첫 글입니다.",
                content: "안녕하세요!",
                author: "김인하",
                date: "2024-11-20"
            }
        ];
    }

    @Get(':idx')
    async getPost(@Param('idx') idx: string) {
        return {
            idx: parseInt(idx),
            title: "첫 글입니다.",
            content: "안녕하세요!",
            author: "김인하",
            date: "2024-11-20"
        };
    }

    @Post()
    async createPost(@Body() postData: { title: string; content: string }) {
        return {
            message: "게시글 작성이 완료되었습니다.",
            postId: 1
        };
    }
} 