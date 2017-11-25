import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ParseIntPipe } from '@nestjs/common';

import { Bill } from './bill.entity';
import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';

@Controller('bills')
export class BillsController {
    constructor(private billsService: BillsService) {}

    @Get()
    async getAllBills(): Promise<Bill[]> {
        return await this.billsService.getAllBills();
    }

    @Get(':id')
    @UsePipes(new ParseIntPipe())
    async getBill(@Param('id') id: number): Promise<Bill> {
        return await this.billsService.getBill(id);
    }


    @Post()
    async create(@Body() createBillDto: CreateBillDto): Promise<Bill> {
        return await this.billsService.create(createBillDto);
    }

    @Patch(':id') 
    async update(@Param('id', new ParseIntPipe()) id: number, @Body() props: any): Promise<[number, Bill[]]> {
        return await this.billsService.update(id, props);
    }

    @Delete(':id')
    @UsePipes(new ParseIntPipe())
    async delete(@Param('id') id: number): Promise<number> {
        return await this.billsService.delete(id);
    }
    

}