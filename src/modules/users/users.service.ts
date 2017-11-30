import { Component, Inject, NotFoundException, ConflictException } from '@nestjs/common';
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
        return await user.save().catch(this.errorHandler);
    }

    async getUser(id: number): Promise<User> {
        const result = await this.usersRepository.scope('full').findById<User>(id);
        if(!result) 
             throw new NotFoundException();

        return result;
    }

    async update(id: number, props: any): Promise<[number, User[]]> {
        return await this.usersRepository.update<User>(props, { where: { id }, individualHooks: true });
    }

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.findAll<User>();
    }

    async delete(id: number): Promise<number> {
        return await this.usersRepository.destroy({ where: { id }});
    }

    private errorHandler(err?: any) {
        const { name, errors } = err;
        if(name === 'SequelizeUniqueConstraintError')
            throw new ConflictException(`${errors[0].path} ${errors[0].value} already exists`);
    }


}