import { NotFoundException } from '@nestjs/common';


export function checkNullReturn<T>(data: T): T {
    if(!data)
        throw new NotFoundException();

    return data;
}