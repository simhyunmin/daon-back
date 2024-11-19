import { Controller, Get } from '@nestjs/common';
import { VolunteersService } from './volunteers.service';
import { VolunteerResponseDto } from './dto/volunteer.dto';

@Controller('api/volunteers')
export class VolunteersController {
  constructor(private readonly volunteersService: VolunteersService) {}

  @Get()
  async getVolunteers(): Promise<VolunteerResponseDto[]> {
    // 임시 데이터 생성
    const mockData = {
      title: '환경 보호 캠페인',
      category: '환경',
      date: '2024-11-20',
      time: '14:00',
      location: '서울',
      description: '서울 도심에서 환경 정화 활동',
      maxParticipants: 10,
      requirements: '특별한 요구사항 없음',
      organizerName: '김인하',
      organizerContact: '010-1234-5678',
    };

    // 서비스에 임시 데이터 추가
    this.volunteersService.createVolunteer(mockData);
    return this.volunteersService.getVolunteers();
  }
}
