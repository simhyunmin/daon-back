import { Controller, Get } from '@nestjs/common';

@Controller('api/mypage')
export class MypageController {
    @Get()
    async getMyPage() {
        return {
            user: {
                userIdx: 1,
                name: "김인하",
                email: "inha@example.com",
                nickname: "선한인하"
            },
            previousVolunteer: [
                {
                    idx: 1,
                    title: "환경 보호 캠페인",
                    status: "신청 완료",
                    date: "2024-11-20"
                },
                {
                    idx: 2,
                    title: "노인 복지 봉사",
                    status: "진행 중",
                    date: "2024-12-01"
                }
            ]
        };
    }
} 