import { IsString, Length, MinLength } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @Length(3, 20)
  'name': string;

  @IsString()
  @MinLength(6)
  'description': string;
}
