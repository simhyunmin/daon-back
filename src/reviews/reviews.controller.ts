import { Controller, Get, Post, Body, Query } from '@nestjs/common';

@Controller('api/reviews')
export class ReviewsController {
    @Get()
    async getReviews(@Query('volunteerId') volunteerId?: string) {
        return [
            {
                idx: 1,
                volunteerIdx: 1,
                content: "좋은 경험이었습니다.",
                author: "김인하",
                date: "2024-11-20"
            }
        ];
    }

    @Post()
    async createReview(@Body() reviewData: { volunteerIdx: number; content: string }) {
        return {
            message: "후기 작성이 완료되었습니다.",
            reviewId: 1
        };
    }
} 