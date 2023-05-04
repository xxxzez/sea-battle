import { Controller, Get } from '@nestjs/common';
import { RoleService } from '@server/app/modules/role/role.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoleEntity } from '@server/app/modules/role/role.entity';

@ApiTags('Roles')
@Controller('/api/roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: 'User roles' })
  @ApiResponse({ status: 200, type: [RoleEntity] })
  @Get()
  async getRoles() {
    return this.roleService.getRoles();
  }
}
