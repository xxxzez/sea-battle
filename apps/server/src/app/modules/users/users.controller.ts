import { Controller, Get } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersEntity } from './users.entity';
import { UsersService } from './users.service';

@ApiTags("Users")
@ApiHeader({
  name: "Authentication",
  description: "Bearer {token}",
  required: true,
})
@Controller('/get-all-users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  
  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [UsersEntity] })
  @Get()
  async getAllUsers() {
    console.log("here")
    return this.userService.getAllUsers();
  }
}
