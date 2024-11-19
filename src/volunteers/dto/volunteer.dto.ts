export class CreateVolunteerDto {
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
}

export class VolunteerResponseDto {
  idx: number;
  title: string;
  date: string;
  location: string;
  description: string;
  participants: number;
  maxParticipants: number;
  createdAt: string;
}
