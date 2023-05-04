import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Create a new account' })
  @ApiResponse({ status: 200 })
  @Post('/sign-up')
  async signUp(@Body() authDto: AuthDto) {
    return this.authService.signUp(authDto);
  }
}
