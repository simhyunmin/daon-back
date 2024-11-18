import { Module } from '@nestjs/common';
import { MypageModule } from './mypage/mypage.module';
import { VolunteersModule } from './volunteers/volunteers.module';
import { ReviewsModule } from './reviews/reviews.module';
import { BoardModule } from './board/board.module';
import { RecruitModule } from './recruit/recruit.module';

@Module({
  imports: [
    MypageModule,
    VolunteersModule,
    ReviewsModule,
    BoardModule,
    RecruitModule
  ],
})
export class AppModule { }
