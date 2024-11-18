import { Injectable } from '@nestjs/common';

@Injectable()
export class VolunteersService {
  private volunteers = [
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

  getVolunteers() {
    return this.volunteers;
  }

  getVolunteerDetail(id: string) {
    return {
      idx: parseInt(id),
      title: "환경 보호 캠페인",
      description: "서울 도심에서 환경 정화 활동",
      date: "2024-11-20",
      location: "서울",
      participants: [
        {
          userIdx: 1,
          name: "김인하",
          nickname: "선한인하"
        }
      ]
    };
  }

  applyVolunteer(id: string) {
    return {
      message: "봉사활동 신청이 완료되었습니다."
    };
  }
}