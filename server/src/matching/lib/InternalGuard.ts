import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class InternalGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const secret = request.headers['x-internal-secret'];
    const expected = process.env.INTERNAL_API_KEY;

    console.log('=== InternalGuard Debug ===');
    console.log('Received header:', secret);
    console.log('Expected key exists:', !!expected);
    console.log('Expected key starts with:', expected?.slice(0, 4));
    console.log('Match:', secret === expected);

    if (secret !== expected) {
      throw new UnauthorizedException('Invalid internal secret');
    }
    return true;
  }
}
