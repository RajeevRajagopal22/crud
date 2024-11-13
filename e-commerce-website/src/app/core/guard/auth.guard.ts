import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const isAuthenticated = this.authService.isAuthenticated(); // Replace this with your actual auth check

    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      this.router.navigate(['/login']);
      return false; // Prevent access
    }
    return true; // Allow access
  }
}
