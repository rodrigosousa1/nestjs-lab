import { IsString, IsInt, IsNumber, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateBillDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;
    
    @IsNotEmpty()
    @IsString()
    readonly dueDate: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly amount: number;
}