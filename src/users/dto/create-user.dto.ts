import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'E-mail do usuario', example: 'name@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome completo do usuario' })
  name: string;

  @IsBoolean()
  @ApiProperty({ description: 'Define se o usuario é administrador', default: false })
  admin: boolean;
}
