import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = new User();

  constructor(private tokenService: TokenStorageService) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    this.user.fullName = this.user.firstName + ' ' + this.user.lastName;
  }
}
