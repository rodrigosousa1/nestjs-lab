import { Component, Inject, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { Model } from 'sequelize-typescript';

import { User } from '../users/user.entity';
import { AUTH_CONFIG } from './auth.config';

@Component()
export class AuthService {
    constructor(
        @Inject('UsersRepository') 
        private usersRepository: typeof Model) {}

    async createToken(payload) {
        const expiresIn = AUTH_CONFIG.jwtAuth.jwtExpiresIn;
        const secretOrKey = AUTH_CONFIG.jwtAuth.jwtSecret;
        const token = jwt.sign(payload, secretOrKey, { expiresIn });

        return {
            expires_in: expiresIn,
            access_token: token
        };
    }


    async validateUser(signedUser): Promise<boolean> {
        const { email } = signedUser;
        const user = await this.findUserByEmail(email);

        if (!user)
            return false;
        
        return true;
    }

     async signInWithEmail(credentials) {
        const { email, password } = credentials;
        const user = await this.findUserByEmail(email);

        if(!user || user.get('password') !== password)
             throw new UnauthorizedException();
        
        return this.createToken(user.toJSON());
    }

    private async findUserByEmail(email: string): Promise<User> {
        return await this.usersRepository.findOne<User>({ where: { email }});
    }

}
