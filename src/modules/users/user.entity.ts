import { AllowNull, Column, Default, DefaultScope, HasMany, Model, Scopes, Table, Unique } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';

import { Bill } from '../bills/bill.entity';

@DefaultScope({
    attributes: ['id', 'name', 'email', 'isAdmin']
})
@Scopes({
    full: {
        include:[() => Bill]
    }
})
@Table({ 
    tableName: 'Users',
    timestamps: true,
    paranoid: true
})
export class User extends Model<User> {
    
    @AllowNull(false)
    @Column(DataType.STRING(30))
    name: string;

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING(80))
    email: string;

    @AllowNull(false)
    @Column(DataType.STRING(30))
    password: string;

    @AllowNull(false)
    @Default(false)
    @Column(DataType.BOOLEAN)
    isAdmin: boolean;

    @HasMany(() => Bill)
    bills: Bill[]

}