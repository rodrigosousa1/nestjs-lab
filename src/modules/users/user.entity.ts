import * as bcrypt from 'bcrypt';
import {
    AllowNull,
    BeforeCreate,
    Column,
    DataType,
    Default,
    DefaultScope,
    HasMany,
    Model,
    Scopes,
    Table,
    Unique,
} from 'sequelize-typescript';

import { Bill } from '../bills/bill.entity';

@DefaultScope({
    attributes: ['id', 'name', 'email', 'isAdmin']
})
@Scopes({
    full: {
        include:[() => Bill]
    },
    auth: {
        attributes: ['id', 'name', 'email', 'password', 'isAdmin']
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
    @Column(DataType.STRING)
    password: string;

    @AllowNull(false)
    @Default(false)
    @Column(DataType.BOOLEAN)
    isAdmin: boolean;

    @HasMany(() => Bill)
    bills: Bill[]

    @BeforeCreate
    static async hashPassword(instance: User) {
        const hashedPw = await bcrypt.hash(instance.password, 10);
        instance.password = hashedPw;
    }

}