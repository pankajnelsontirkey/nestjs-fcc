import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProfilesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    /* 
    // Get the request from ExecutionContext
    const request = context.switchToHttp().getRequest();
    // Call some authentication method on request object
    authenticate(request)
    // authenticated should return true/false depending on whether request has some auth/role property that controls whether the current resource should be accessible.
    */

    return false;
  }
}
