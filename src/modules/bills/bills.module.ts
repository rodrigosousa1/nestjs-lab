import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { BillsController } from './bills.controller';
import { billsProvider } from './bills.provider';
import { BillsService } from './bills.service';

@Module({
    modules: [DatabaseModule],
    controllers:[BillsController],
    components: [
        BillsService,
        billsProvider
    ]
})
export class BillsModule {}