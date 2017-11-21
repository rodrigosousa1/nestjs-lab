import { Table, Column, Model } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';

@Table
export class Bills extends Model<Bills> {
    
    @Column
    title: string;

    @Column(DataType.TIME)
    dueDate: string;

    @Column(DataType.NUMERIC)
    amount: number;
}