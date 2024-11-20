import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';

// DTO 추가
interface CreateReviewDto {
  title: string;
  location: string;
  content: string;
}

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

    @Get(':id')
    async getReviewById(@Param('id') id: string) {
        return {
            idx: parseInt(id),
            title: "노인복지관에서의 특별한 하루",
            author: "김다온",
            date: "2024-03-28",
            location: "서울시 송파구",
            likes: 15,
            content: "처음에는 걱정이 많았지만, 어르신들과 함께한 시간이 정말 의미있었습니다. 어르신들의 따뜻한 미소와 감사의 말씀에 제가 더 감사한 하루였습니다."
        };
    }

    @Post()
    async createReview(@Body() reviewData: CreateReviewDto) {
        // 임시로 하드코딩된 응답
        return {
            idx: 999,  // 임시 ID
            title: reviewData.title,
            location: reviewData.location,
            content: reviewData.content,
            author: "임시작성자",  // 나중에 로그인 기능 추가시 실제 사용자 정보로 대체
            date: new Date().toISOString().split('T')[0],
            likes: 0
        };
    }
} 