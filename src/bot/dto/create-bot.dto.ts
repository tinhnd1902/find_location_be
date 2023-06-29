import { IsOptional, IsString } from 'class-validator';

export class CreateBotDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;
}
