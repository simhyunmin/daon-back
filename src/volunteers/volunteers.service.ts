import { Injectable } from '@nestjs/common';

@Injectable()
export class VolunteersService {
  private volunteers = [];

  findAll() {
    return this.volunteers;
  }

  findOne(id: number) {
    return this.volunteers.find(volunteer => volunteer.idx === id);
  }

  create(volunteerData) {
    const newVolunteer = {
      idx: this.volunteers.length + 1,
      ...volunteerData
    };
    this.volunteers.push(newVolunteer);
    return newVolunteer;
  }
}