import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "@server/app/modules/base/base.entity";
import { RoleEntity } from "@server/app/modules/role/role.entity";

export class GenerateUserTokenDtoDto extends BaseEntity {
  @ApiProperty({ example: "test@test.com", description: "User email" })
  readonly email: string;
  @ApiProperty({ example: "admin", description: "User role", required: false })
  readonly role?: RoleEntity;
}
