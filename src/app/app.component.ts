import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { IdleTimeoutDialogComponent } from './components/dialogs/idle-timeout-dialog/idle-timeout-dialog.component';
import { TokenStorageService } from './services/auth/token-storage.service';
import { TimeoutService } from './services/timeout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //title:'QuizPortal';

  constructor(
    private router: Router,
    private titleService: Title,
    private timeoutService: TimeoutService,
    private tokenService: TokenStorageService,
    private dialog: MatDialog
  ) {
    //this.titleService.setTitle(title);
    if (tokenService.isLoggedIn()) {
      this.onTimeOutForMonitor();
    }
  }

  ngOnInit() {
    this.getPageTitle();
  }

  getPageTitle() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routTitle = route!.snapshot.data['title'];
          }
          return routTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`${title}`);
        }
      });
  }

  onTimeOutForMonitor() {
    this.timeoutService.setIdleTime(1800000); // 30 minute... call this method if you want to override default 20 minute timeout
    this.timeoutService.handleInactivity().subscribe((inactive) => {
      console.log('timeoutService called.');
      //this.dialog.closeAll();
      this.dialog.open(IdleTimeoutDialogComponent, {
        height: '20%',
        width: '30%',
        position: { top: '10%' },
        disableClose:true,
        restoreFocus:true,
        data: this.timeoutService.idleTime,
      });
    });
  }

  /* openDialog() {
    const dialogRef = this.dialog.open(IdleTimeoutDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal'
    });
  }*/
}
