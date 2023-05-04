import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';
import { DataSource } from 'typeorm';
import { UsersEntity } from '@server/app/modules/users/users.entity';
import { UsersService } from '@server/app/modules/users/users.service';
import { GenerateUserTokenDtoDto } from './dto/generate-tokens.dto';
import { AuthDto } from './dto/auth.dto';
import { RoleEntity } from '../role/role.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private mailService: MailerService,
    private jwtService: JwtService,
    private dataSource: DataSource
  ) {}

  async signUp(authDto: AuthDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const user = await this.userService.getUserByEmail(authDto)
      if (!user) {
        const hashPassword = await bcrypt.hash(authDto.password, 5);
        let userRole = await queryRunner.manager.findOne(RoleEntity, { where: { value: "user" } });
        if (!userRole) {
          userRole = new RoleEntity()
          userRole.value = "user";
          userRole.description = "Can read some data";
          await queryRunner.manager.save(userRole);
        }

        const userEntity = new UsersEntity();
        userEntity.email = authDto.email;
        userEntity.password = hashPassword;
        userEntity.role = userRole;
        const user = await queryRunner.manager.save(userEntity);

        // TODO: verify send grid account
        const response = await this.mailService.sendMail({
          to: authDto.email,
          from: 'noreply@gmail.com',
          subject: 'Plain Text Email ✔',
          text: 'Welcome NestJS Email Sending Tutorial',
        });
        console.log(response);
        //Temporary
        await queryRunner.commitTransaction();
        return await this.getTokens(user);
      }
      return new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    } catch (error) {
      console.log(error)
      await queryRunner.rollbackTransaction();
      return error;
    } finally {
      await queryRunner.release();
    }
  }

  async getTokens(user: GenerateUserTokenDtoDto): Promise<{
    access_token;
    refresh_token;
  }> {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(
        {
          uuid: user.uuid,
          email: user.email,
          role: user.role,
        },
        {
          secret: process.env.SECRET_KEY,
          expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
        }
      ),
      this.jwtService.signAsync(
        {
          uuid: user.uuid,
          email: user.email,
        },
        {
          secret: process.env.SECRET_KEY,
          expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
        }
      ),
    ]);
    return {
      access_token,
      refresh_token,
    };
  }
}
