import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AuthDto } from '@server/app/modules/auth/dto/auth.dto';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private userRepository: Repository<UsersEntity>,
    private dataSource: DataSource
  ) {}

  async getAllUsers() {
    return this.userRepository.find({
      select: {
        uuid: true,
        email: true,
      },
      relations: {
        role: true,
      },
    });
  }

  async getUserByEmail(authDto: AuthDto) {
    return this.userRepository.findOne({
      where: {
        email: authDto.email,
      },
      relations: {
        role: true,
      },
    });
  }
}
