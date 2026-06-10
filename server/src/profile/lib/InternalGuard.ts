import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';


@Injectable()
export class InternalGuard implements CanActivate{
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return request.headers['x-internal-secret'] === process.env.INTERNAL_SECRET;
  }
}

