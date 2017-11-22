import { AllowNull, Column, Model, Table } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';

@Table
export class Bill extends Model<Bill> {

    @AllowNull(false)
    @Column
    title: string;

    @AllowNull(false)
    @Column(DataType.TIME)
    dueDate: string;

    @AllowNull(false)
    @Column(DataType.NUMERIC)
    amount: number;
}