export interface VolunteerDetail {
  idx: number;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  currentParticipants: number;
  maxParticipants: number;
  requirements: string;
  organizerName: string;
  organizerContact: string;
  createdAt: string;
  participants: {
    userIdx: number;
    name: string;
    nickname: string;
  }[];
} 