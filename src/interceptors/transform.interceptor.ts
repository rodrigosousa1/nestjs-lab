import 'rxjs/add/operator/map';

import { ExecutionContext, Interceptor, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';

@Interceptor()
export class TransformInterceptor implements NestInterceptor {
    intercept(req, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
        return stream$.map((payload) => ({ payload }));
    }
}