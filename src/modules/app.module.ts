import { Module } from '@nestjs/common';
import { BillsModule } from './bills/bills.module';

@Module({
    modules:[BillsModule]
})
export class AppModule {}