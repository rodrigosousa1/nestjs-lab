import { Sequelize } from 'sequelize-typescript';

import { Bill } from '../bills/bill.entity';
import { User } from '../users/user.entity';

export const databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'r00t',
                database: 'bc-database'
            });

            sequelize.addModels([Bill, User]);

            await sequelize.sync();
            
            return sequelize;
        }
    }
];