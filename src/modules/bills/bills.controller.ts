import { Controller, Get } from '@nestjs/common';
import { BillsService } from './bills.service';
import { Bills } from './bills.entity';

@Controller('bills')
export class BillsController {
    constructor(private billsService: BillsService) {}

    @Get()
    async findAll(): Promise<Bills[]> {
        return await this.billsService.findAll();
    }
}