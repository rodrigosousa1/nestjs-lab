import { Component, Inject, NotFoundException } from '@nestjs/common';
import { Model } from 'sequelize-typescript';

import { Bill } from './bill.entity';
import { CreateBillDto } from './dto/create-bill.dto';


@Component()
export class BillsService {
    constructor(
        @Inject('BillsRepository') 
        private billsRepository: typeof Model) {}

    async create(createBillDto: CreateBillDto): Promise<Bill> {
        const bill = new Bill(createBillDto);
        return await bill.save();
    }

    async getBill(id: number): Promise<Bill> {
        const result = await this.billsRepository.scope('full').findById<Bill>(id);
        
        if(!result) 
            throw new NotFoundException();
    
        return result;
    }

    async update(id: number, props: any): Promise<[number, Bill[]]> {
        return await this.billsRepository.update<Bill>(props, { where: { id } });
    }

    async getAllBills(): Promise<Bill[]> {
        return await this.billsRepository.findAll<Bill>();
    }

    async delete(id: number): Promise<number> {
        return await this.billsRepository.destroy({ where: { id } })
    }
}