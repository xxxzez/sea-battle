import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '@server/app/modules/base/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { UsersEntity } from '@server/app/modules/users/users.entity';

@Entity('role')
export class RoleEntity extends BaseEntity {
  @ApiProperty({ example: 'user', description: 'User role: admin || user' })
  @Column({ unique: true, nullable: false })
  value: string;
  @ApiProperty({
    example: 'Some text...',
    description: 'User role description',
  })
  @Column({ nullable: false })
  description: string;

  @OneToMany(() => UsersEntity, (user) => user.role)
  users: RoleEntity[];
}
