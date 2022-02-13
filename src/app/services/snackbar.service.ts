import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  error(message: string,statusText?:string) {
    return this.snackBar.open(message, statusText, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snackbar-error'] //['mat-toolbar', 'mat-warn']
    });
  }

  warn(message: string,statusText?:string) {
    return this.snackBar.open(message, statusText, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snackbar-warn']
    });
  }

  success(message: string,status?:any) {
    return this.snackBar.open(message, status, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snackbar-success'] //['mat-toolbar', 'mat-warn']
    });
  }
}
