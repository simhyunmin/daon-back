import { Injectable } from '@nestjs/common';
import { VolunteerDetail } from './interfaces/volunteer-detail.interface';

interface Volunteer {
  idx: number;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  maxParticipants: number;
  requirements: string;
  organizerName: string;
  organizerContact: string;
  participants: number;
  currentParticipants?: number;
  createdAt: string;
}

@Injectable()
export class VolunteersService {
  private volunteers: Volunteer[] = [];

  getVolunteers() {
    return this.volunteers;
  }

  getVolunteerDetail(id: string): VolunteerDetail {
    const volunteer = this.volunteers.find((v) => v.idx === parseInt(id));
    if (!volunteer) {
      throw new Error('봉사활동을 찾을 수 없습니다.');
    }

    return {
      ...volunteer,
      currentParticipants:
        volunteer.currentParticipants || volunteer.participants,
      participants: [
        {
          userIdx: 1,
          name: '김인하',
          nickname: '선한인하',
        },
      ],
    };
  }

  createVolunteer(data: Omit<Volunteer, 'idx' | 'participants' | 'createdAt'>) {
    const newVolunteer: Volunteer = {
      ...data,
      participants: 0,
      idx: this.volunteers.length + 1,
      createdAt: new Date().toISOString().split('T')[0],
    };
    this.volunteers.push(newVolunteer);
    return newVolunteer;
  }

  applyVolunteer(id: string) {
    const volunteer = this.volunteers.find((v) => v.idx === parseInt(id));
    if (!volunteer) {
      throw new Error('봉사활동을 찾을 수 없습니다.');
    }

    if (volunteer.currentParticipants >= volunteer.maxParticipants) {
      throw new Error('더 이상 신청할 수 없습니다.');
    }

    volunteer.currentParticipants += 1;
    return {
      message: '봉사활동 신청이 완료되었습니다.',
    };
  }
}
