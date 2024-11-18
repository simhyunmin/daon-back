import { Controller, Get, Post, Param } from '@nestjs/common';
import { VolunteersService } from './volunteers.service';

@Controller('api/volunteers')
export class VolunteersController {
  constructor(private readonly volunteersService: VolunteersService) { }

  @Get()
  async getVolunteers() {
    return this.volunteersService.getVolunteers();
  }

  @Get(':id')
  async getVolunteerDetail(@Param('id') id: string) {
    return this.volunteersService.getVolunteerDetail(id);
  }

  @Post(':id/apply')
  async applyVolunteer(@Param('id') id: string) {
    return this.volunteersService.applyVolunteer(id);
  }
} 