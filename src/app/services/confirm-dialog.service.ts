import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from '../components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ConfirmDialogModel } from '../models/confirm-dialog.model';

@Injectable({ providedIn: 'root' })
export class ConfigmDialogService {
  constructor(public dialog: MatDialog) {}

  deleteConfirmDialog(): any {
    const message = `Are you sure you want to delete?`;
    const dialogData = new ConfirmDialogModel('Delete Confirmation', message);
    return this.dialog
      .open(ConfirmationDialogComponent, {
        width: '400px',
        data: dialogData,
      })
      .afterClosed();
  }

  saveConfirmDialog(): any {
    const message = `Are you sure you want to save?`;
    const dialogData = new ConfirmDialogModel('Save Confirmation', message);
    return this.dialog
      .open(ConfirmationDialogComponent, {
        width: '400px',
        data: dialogData,
      })
      .afterClosed();
  }
}
