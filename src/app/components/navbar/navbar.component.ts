import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  username: string;

  constructor(
    private tokenService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.isLoggedIn();
    this.username = this.tokenService.getUsername();
  }

  logout() {
    this.tokenService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['']);
    //window.location.reload();
  }
}
