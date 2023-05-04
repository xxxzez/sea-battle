import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '@server/app/modules/base/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { RoleEntity } from '@server/app/modules/role/role.entity';

@Entity('users')
export class UsersEntity extends BaseEntity {
  @ApiProperty({ example: 'test@test.com', description: 'User email' })
  @Column({ unique: true, nullable: false })
  email: string;
  @ApiProperty({ example: 'ABCabc123', description: 'User password' })
  @Column({ nullable: false })
  password: string;
  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @ManyToOne(() => RoleEntity, (role) => role.uuid, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  role: RoleEntity;
}
