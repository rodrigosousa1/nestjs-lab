import { Bills } from './bills.entity';

export const billsProvider = {
    provide: 'BillsRepository',
    useValue: Bills
}