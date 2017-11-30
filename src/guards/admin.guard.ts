import { ExecutionContext, ForbiddenException, Guard } from '@nestjs/common';
import { CanActivate } from '@nestjs/common/interfaces';

@Guard()
export class AdminGuard implements CanActivate {
    public canActivate(req: any, context: ExecutionContext): boolean {
        const isAdmin = req.user.isAdmin;
        if(!isAdmin)
            throw new ForbiddenException(`insufficient permissions`);
        
        return isAdmin;
    }
}