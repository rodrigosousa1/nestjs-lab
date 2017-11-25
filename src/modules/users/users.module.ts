import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users.controller';
import { usersProvider } from './users.provider';
import { UsersService } from './users.service';

@Module({
    modules: [DatabaseModule],
    controllers: [UsersController],
    components: [
        UsersService,
        usersProvider
    ]
})
export class UsersModule {}