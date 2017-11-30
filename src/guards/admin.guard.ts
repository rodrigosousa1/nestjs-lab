import { ExecutionContext, ForbiddenException, Guard } from '@nestjs/common';
import { CanActivate } from '@nestjs/common/interfaces';

@Guard()
export class AdminGuard implements CanActivate {
    public canActivate(req: any, context: ExecutionContext): boolean {
        const isAdmin = req.user.isAdmin;
        if(!isAdmin)
            throw new ForbiddenException(`You don't have permission to access this resource`, 'Access Denied');
        
        return isAdmin;
    }
}