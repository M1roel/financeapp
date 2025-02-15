import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { Pot } from '../../models/pot.class';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-pot',
  standalone: true,
  imports: [TranslateModule, CommonModule, MatDialogModule, FormsModule],
  templateUrl: './dialog-add-pot.component.html',
  styleUrl: './dialog-add-pot.component.scss'
})
export class DialogAddPotComponent {

  pot = new Pot();

  constructor(
    private dialogRef: MatDialogRef<DialogAddPotComponent>, 
    @Inject(Firestore) private firestore: Firestore
  ) { }

  closeDialog() {
    this.dialogRef.close();
  }

  async addPot() {
    try {
      await addDoc(collection(this.firestore, 'pots'), this.pot.toJSON());
      this.closeDialog();
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Pots:', error);
    }
  }
}
