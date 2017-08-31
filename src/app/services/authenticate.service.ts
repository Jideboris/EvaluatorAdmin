import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthserviceService } from "../services/authservice.service";

@Injectable()
export class AuthenticateService implements CanActivate {

  constructor(private router: Router, private authservice: AuthserviceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authservice.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authservice.redirectUrl = url;

    // Navigate to the login page with extras
    // this.router.navigate(['/location']);
    return false;
  }
}
