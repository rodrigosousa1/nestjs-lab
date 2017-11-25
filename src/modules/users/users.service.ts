import { Component, Inject } from '@nestjs/common';
import { Model } from 'sequelize-typescript';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Component()
export class UsersService {
    constructor(
        @Inject('UsersRepository')
        private usersRepository: typeof Model) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User(createUserDto);
        return await user.save();
    }

    async getUser(id: number): Promise<User> {
        return await this.usersRepository.findById<User>(id);
    }

    async update(id: number, props: any): Promise<[number, User[]]> {
        return await this.usersRepository.update<User>(props, { where: { id } });
    }

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.findAll<User>();
    }

    async delete(id: number): Promise<number> {
        return await this.usersRepository.destroy({ where: { id }});
    }


}