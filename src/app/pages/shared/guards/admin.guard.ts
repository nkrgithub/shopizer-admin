import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  {

  constructor(
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    const roles = JSON.parse(localStorage.getItem('roles'));
    if (roles.isAdmin) {
      return true;
    }

    this.router.navigate(['home']);
    return false;

  }

}
