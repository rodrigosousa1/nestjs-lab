import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { BillsModule } from './bills/bills.module';

@Module({
    modules:[
        BillsModule,
        AuthModule,
        UsersModule
    ]
})
export class AppModule {}