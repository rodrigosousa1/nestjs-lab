import { AllowNull, BelongsTo, Column, DefaultScope, ForeignKey, Model, Scopes, Table } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';

import { User } from '../users/user.entity';

@DefaultScope({
    attributes: ['id', 'title', 'dueDate', 'amount']
})
@Scopes({
    full: {
        include:[() => User]
    }
})
@Table({ 
    tableName: 'Bills',
    timestamps: true,
    paranoid: true
})
export class Bill extends Model<Bill> {
    
    @AllowNull(false)
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId: number;

    @AllowNull(false)
    @Column(DataType.STRING(30))
    title: string;

    @AllowNull(false)
    @Column(DataType.DATE)
    dueDate: string;

    @AllowNull(false)
    @Column(DataType.NUMERIC(8,2))
    amount: number;

    @BelongsTo(() => User)
    user: User;
}