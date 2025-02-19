import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { Pot } from '../../models/pot.class';
import { Firestore, doc, updateDoc, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-withdraw-pot',
  standalone: true,
  imports: [TranslateModule, MatDialogModule],
  templateUrl: './dialog-withdraw-pot.component.html',
  styleUrl: './dialog-withdraw-pot.component.scss'
})
export class DialogWithdrawPotComponent {

  pot = new Pot();
  allPots: any[] = [];

  constructor (
    @Inject(Firestore) private firestore: Firestore,
    @Inject(MAT_DIALOG_DATA) public data: Pot,
    private dialogRef: MatDialogRef<DialogWithdrawPotComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
