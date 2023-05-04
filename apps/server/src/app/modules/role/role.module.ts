import { Module } from '@nestjs/common';
import { RoleController } from '@server/app/modules/role/role.controller';
import { RoleService } from '@server/app/modules/role/role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from '@server/app/modules/role/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
