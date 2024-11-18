import { Controller, Get, Post, Body, Param, Patch, Query } from '@nestjs/common';

@Controller('api/recruit')
export class RecruitController {
    @Get()
    async getRecruits(
        @Query('status') status?: 'recruiting' | 'completed',
        @Query('keyword') keyword?: string
    ) {
        return [
            {
                idx: 1,
                title: "주말 강아지 산책 봉사 같이하실 분",
                author: "김인하",
                date: "2024-11-20",
                location: "인천 송도",
                recruitStatus: "모집중",
                currentMembers: 2,
                maxMembers: 5,
                volunteerDate: "2024-12-15"
            }
        ];
    }

    @Get(':idx')
    async getRecruitDetail(@Param('idx') idx: string) {
        return {
            idx: parseInt(idx),
            title: "주말 강아지 산책 봉사 같이하실 분",
            content: "매주 토요일 강아지 산책 봉사활동을 함께할 분들을 모집합니다.",
            author: "김인하",
            date: "2024-11-20",
            location: "인천 송도",
            recruitStatus: "모집중",
            currentMembers: 2,
            maxMembers: 5,
            volunteerDate: "2024-12-15",
            participants: [
                {
                    userIdx: 1,
                    name: "김인하",
                    nickname: "선한인하"
                }
            ]
        };
    }

    @Post()
    async createRecruit(@Body() recruitData: {
        title: string;
        content: string;
        location: string;
        maxMembers: number;
        volunteerDate: string;
    }) {
        return {
            message: "모집 게시글이 작성되었습니다.",
            recruitId: 1
        };
    }

    @Post(':idx/join')
    async joinRecruit(@Param('idx') idx: string) {
        return {
            message: "참여 신청이 완료되었습니다."
        };
    }

    @Patch(':idx/close')
    async closeRecruit(@Param('idx') idx: string) {
        return {
            message: "모집이 마감되었습니다."
        };
    }
} 