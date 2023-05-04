import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '@server/app/modules/auth/auth.controller';
import { AuthService } from '@server/app/modules/auth/auth.service';
import { UsersEntity } from '@server/app/modules/users/users.entity';
import { UsersModule } from '@server/app/modules/users/users.module';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    TypeOrmModule.forFeature([UsersEntity]),
    JwtModule.register({
      secret: process.env.SECRET_KEY || "secret",
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
