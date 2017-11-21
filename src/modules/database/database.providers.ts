import { Sequelize } from 'sequelize-typescript';

import { Bills } from '../bills/bills.entity';

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
            sequelize.addModels([Bills]);
            await sequelize.sync();
            return sequelize;
        }
    }
];