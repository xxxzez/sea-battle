import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { UsersModule } from '@server/app/modules/users/users.module';
import { UsersEntity } from '@server/app/modules/users/users.entity';
import { RoleEntity } from '@server/app/modules/role/role.entity';
import { RoleModule } from '@server/app/modules/role/role.module';
import { dataSourceOptions } from '@server/config/data-source-options.config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        ...dataSourceOptions,
        entities: [UsersEntity, RoleEntity],
        synchronize: true,
      }),
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.SEND_GRID_HOST,
        auth: {
          user: process.env.SEND_GRID_USER,
          pass: process.env.SEND_GRID_API_KEY,
        },
      },
    }),
    UsersModule,
    RoleModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
