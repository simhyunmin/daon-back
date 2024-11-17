import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { VolunteersService } from './volunteers.service';

@Controller('api/volunteers')
export class VolunteersController {
  constructor(private readonly volunteersService: VolunteersService) {}

  // 봉사활동 목록 조회
  @Get()
  async getVolunteers() {
    return [
      {
        idx: 1,
        title: "환경 보호 캠페인",
        date: "2024-11-20",
        location: "서울",
        description: "서울 도심에서 환경 정화 활동"
      },
      {
        idx: 2,
        title: "노인 복지 봉사",
        date: "2024-12-01",
        location: "부산",
        description: "지역 복지관에서 봉사 활동"
      }
    ];
  }

  // 봉사활동 상세 조회
  @Get(':id')
  async getVolunteerDetail(@Param('id') id: string) {
    return {
      idx: parseInt(id),
      title: "환경 보호 캠페인",
      description: "서울 도심에서 환경 정화 활동",
      date: "2024-11-20",
      location: "서울",
      participants: [
        {
          userId: 1,
          nickname: "username"
        }
      ]
    };
  }

  // 봉사활동 등록
  @Post()
  async createVolunteer(@Body() volunteerData) {
    return {
      message: "봉사활동 등록이 완료되었습니다.",
      volunteerId: 1
    };
  }
} 