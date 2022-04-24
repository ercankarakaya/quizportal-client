import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'app-idle-timeout-dialog',
  templateUrl: './idle-timeout-dialog.component.html',
  styleUrls: ['./idle-timeout-dialog.component.css'],
})
export class IdleTimeoutDialogComponent implements OnInit {
  /* Variables */
  countIdleSecond = 30;
  intervalId = 0;

  constructor(
    private tokenService: TokenStorageService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.start();
  }
  ngOnDestroy() {
    this.clearTimer();
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.countIdleSecond -= 1;
      if (this.countIdleSecond == 0) {
        this.logout();
      }
    }, 1000);
  }

  start() {
    this.countDown();
  }
  stop() {
    this.clearTimer();
  }
  clearTimer() {
    clearInterval(this.intervalId);
  }

  logout() {
    this.tokenService.logout();
    window.location.reload();
  }
}
