import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { billsProvider } from './bills.provider';
import { DatabaseModule } from '../database/database.module';
import { BillsController } from './bills.controller';

@Module({
    modules: [DatabaseModule],
    controllers:[BillsController],
    components: [
        BillsService,
        billsProvider
    ]
})
export class BillsModule {}