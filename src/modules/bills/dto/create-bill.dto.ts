import { IsString, IsInt, IsNumber, IsPositive } from 'class-validator';

export class CreateBillDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly dueDate: string;

    @IsNumber()
    @IsPositive()
    readonly amount: number;
}