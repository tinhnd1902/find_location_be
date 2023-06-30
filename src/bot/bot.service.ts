import { Injectable } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
import { Telegraf, Context } from 'telegraf';
import * as dotenv from 'dotenv';
dotenv.config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
@Injectable()
export class BotService {
  private bot: Telegraf<Context>;
  constructor() {
    this.bot = new Telegraf(TELEGRAM_BOT_TOKEN);
    this.bot.launch();
  }
  //5706663809
  async create(createBotDto: CreateBotDto) {
    if (createBotDto) {
      await this.bot.telegram.sendMessage(
        5706663809,
        `https://www.google.com/maps?q=${createBotDto.latitude},${createBotDto.longitude}`,
      );
      return 'done';
    }
    return 'fail';
  }
}
