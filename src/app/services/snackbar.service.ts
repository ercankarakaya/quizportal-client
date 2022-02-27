import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  error(value) {
    let message=value.message;
    let statusText='';
    if(value.error.message!=undefined){
      message=value.error.message;
      statusText=value.error.statusText;
    }
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
      panelClass: ['snackbar-success'] 
    });
  }
}
