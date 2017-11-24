import { Component } from '@nestjs/common';
import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AUTH_CONFIG } from '../auth.config';
import { AuthService } from '../auth.service';

@Component()
export class JwtStrategy extends Strategy {
    constructor(private authService: AuthService) {
        super( 
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                passReqToCallback: AUTH_CONFIG.jwtAuth.jwtPassReqToCallback,
                secretOrKey: AUTH_CONFIG.jwtAuth.jwtSecret
            },
            async (req, payload, next) => await this.verify(req, payload, next)
        );

        passport.serializeUser((user, done) => done(null, user));
        passport.deserializeUser((obj, done) => done(null, obj));
        passport.use(this);
    }

    async verify (req, payload, done): Promise<any> {
        const isValid = await this.authService.validateUser(payload);
        if (!isValid) 
            return done('Unauthorized', false);
        
        done(null, payload);

    }
}
