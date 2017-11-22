import { Bill } from './bill.entity';

export const billsProvider = {
    provide: 'BillsRepository',
    useValue: Bill
}