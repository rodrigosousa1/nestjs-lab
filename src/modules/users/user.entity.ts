import { AllowNull, Column, Model, Table, Unique } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';


@Table({ 
    tableName: 'Users',
    timestamps: true,
    paranoid: true
})
export class User extends Model<User> {
    
    @AllowNull(false)
    @Column(DataType.STRING(30))
    name: string

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING(80))
    email: string

    @AllowNull(false)
    @Column(DataType.STRING(30))
    password: string

    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    isAdmin: boolean

}