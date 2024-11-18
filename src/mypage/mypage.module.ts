import { Module } from '@nestjs/common';
import { MypageController } from './mypage.controller';

@Module({
    controllers: [MypageController],
})
export class MypageModule { } 