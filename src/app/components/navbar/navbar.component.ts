import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, Routes } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { svgIconUrls } from 'src/app/utils/helper';
import { IconUtil } from 'src/app/utils/icon.util';

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
    private router: Router,
    private iconUtil:IconUtil
  ) {
    this.getSvgIcons();
  }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.isLoggedIn();
    this.username = this.tokenService.getUsername();
  }

  logout() {
    this.tokenService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['']);
    // or-> window.location.href = '';
    // or->  window.location.reload();
  }

 getSvgIcons() {
    this.iconUtil.addSvgIcons('logo',svgIconUrls.LOGO4);
  }
}
