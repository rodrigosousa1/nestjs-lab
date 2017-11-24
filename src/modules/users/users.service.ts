import { User } from './user.entity';
import { Component, Inject } from '@nestjs/common';
import { Model } from 'sequelize-typescript';

@Component()
export class UsersService {
    constructor(
        @Inject('UsersRepository')
        private usersRepository: typeof Model) {}

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.findAll<User>();
    }
}