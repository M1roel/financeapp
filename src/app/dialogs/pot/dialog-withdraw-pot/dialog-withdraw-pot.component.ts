import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { Pot } from '../../../models/pot.class';
import { Firestore, doc, updateDoc, collection, collectionData } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-withdraw-pot',
  standalone: true,
  imports: [TranslateModule, MatDialogModule, MatProgressBarModule, CommonModule],
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

  ngOnInit(): void {
    const potCollection = collection(this.firestore, 'pots');

    collectionData(potCollection, { idField: 'id' }).subscribe(
      (changes: any) => {
        console.log(changes);
        this.allPots = changes;

        if (changes.length > 0) {
          Object.assign(this.pot, changes[0]);
        }
      }
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
