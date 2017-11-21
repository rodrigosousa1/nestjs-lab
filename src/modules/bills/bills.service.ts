import { Component, Inject } from '@nestjs/common';
import { Model } from 'sequelize-typescript';

import { Bills } from './bills.entity';





@Component()
export class BillsService {
    constructor(@Inject('BillsRepository') private billsRepository: typeof Model) {}

    async findAll(): Promise<Bills[]> {
        return await this.billsRepository.findAll<Bills>();
    }
}