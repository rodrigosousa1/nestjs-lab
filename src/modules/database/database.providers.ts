import { Sequelize } from 'sequelize-typescript';

import { Bill } from '../bills/bill.entity';

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

            sequelize.addModels([Bill]);

            await sequelize.sync();
            
            return sequelize;
        }
    }
];