import { IsEmail, IsNotEmpty, IsString, MinLength, IsUrl } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsUrl()
  social_url: string;
}
