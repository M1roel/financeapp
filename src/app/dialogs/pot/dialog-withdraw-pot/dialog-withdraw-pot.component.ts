import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { Pot } from '../../../models/pot.class';
import { Firestore, doc, updateDoc, collection, collectionData } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-withdraw-pot',
  standalone: true,
  imports: [TranslateModule, MatDialogModule, MatProgressBarModule, CommonModule, FormsModule],
  templateUrl: './dialog-withdraw-pot.component.html',
  styleUrl: './dialog-withdraw-pot.component.scss'
})
export class DialogWithdrawPotComponent {

  amountToWithdraw: number | null = null;
  pot = new Pot();
  allPots: any[] = [];

  constructor (
    @Inject(Firestore) private firestore: Firestore,
    @Inject(MAT_DIALOG_DATA) public data: Pot,
    private dialogRef: MatDialogRef<DialogWithdrawPotComponent>
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.pot = this.data;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  async updateTotalSaved(pot: Pot) {
    if (this.data?.id) {
      if (this.amountToWithdraw === null || this.amountToWithdraw <= 0) {
        console.error('Bitte einen gültigen Betrag eingeben.');
        return;
      }
      const newTotalSaved = this.pot.total_saved - this.amountToWithdraw;
      const potDocRef = doc(this.firestore, `pots/${this.data.id}`);
      try {
        await updateDoc(potDocRef, { total_saved: newTotalSaved });
        this.pot.total_saved = newTotalSaved;
        this.closeDialog();
      } catch (error) {
        console.error('Fehler beim Aktualisieren von total_saved:', error);
      }
    } else {
      console.error('Kein pot-Datenobjekt verfügbar.');
    }
  }
}
