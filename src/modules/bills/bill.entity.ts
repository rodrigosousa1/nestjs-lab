import { AllowNull, Column, Model, Table } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';

@Table({ 
    tableName: 'Bills',
    timestamps: true,
    paranoid: true
})
export class Bill extends Model<Bill> {

    @AllowNull(false)
    @Column(DataType.STRING(30))
    title: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    dueDate: string;

    @AllowNull(false)
    @Column(DataType.NUMERIC(8,2))
    amount: number;
}