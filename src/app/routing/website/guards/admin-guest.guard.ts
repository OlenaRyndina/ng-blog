import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AdminAuthService } from '../../../store/admin-auth-store/services/admin-auth.service';

@Injectable()
export class AdminGuestGuard implements CanActivate, CanLoad {

    constructor(
        private router: Router,
        private adminAuthService: AdminAuthService
    ){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.getIsGuest();
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.getIsGuest();
    }

    private getIsGuest(): Observable<boolean> {
        return this.adminAuthService.isGuest$.pipe(
            first(),
            map(isGuest => {
                if(!isGuest) {
                    this.router.navigateByUrl('/admin');
                }

                return isGuest;
            })
        )
    }
}
