import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  error(data: any) {
    return this.snackBar.open(data.error.message, data.statusText, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snackbar-error'], //['mat-toolbar', 'mat-warn']
    });
  }

  success(data: any) {
    return this.snackBar.open(data.message, data.status, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snackbar-success'], //['mat-toolbar', 'mat-warn']
    });
  }
}