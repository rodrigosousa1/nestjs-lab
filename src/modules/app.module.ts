import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { BillsModule } from './bills/bills.module';
import { UsersModule } from './users/users.module';

@Module({
    modules:[
        BillsModule,
        AuthModule,
        UsersModule
    ]
})
export class AppModule {}