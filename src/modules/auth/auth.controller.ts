import { AuthService } from '../auth/auth.service';
import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private authService :AuthService) {}

    @Post('token')
    @HttpCode(HttpStatus.OK)
    signIn(@Body() credentials) {
        return this.authService.signInWithEmail(credentials);
    }
}