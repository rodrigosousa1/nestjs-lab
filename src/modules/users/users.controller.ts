import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { AdminGuard } from '../../guards/admin.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    

    @Get()
    @UseGuards(AdminGuard)
    async getAllUsers(): Promise<User[]> {
        return await this.usersService.getAllUsers();
    }

    @Get(':id')
    @UsePipes(new ParseIntPipe())
    async getUser(@Param('id') id: number): Promise<User> {
        return await this.usersService.getUser(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.usersService.create(createUserDto);
    }

    @Patch(':id')
    async update(@Param('id', new ParseIntPipe()) id: number, @Body() props: any): Promise<[number, User[]]> {
        return await this.usersService.update(id, props);
    }

    @Delete(':id')
    @UsePipes(new ParseIntPipe())
    async delete(@Param('id') id: number): Promise<number> {
        return await this.usersService.delete(id);
    }
}