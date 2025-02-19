import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { Pot } from '../../../models/pot.class';
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

  colorOptions = [
    { value: 'green', labelKey: 'POTS.ADD_POT.THEME_COLOR.GREEN' },
    { value: 'yellow', labelKey: 'POTS.ADD_POT.THEME_COLOR.YELLOW' },
    { value: 'cyan', labelKey: 'POTS.ADD_POT.THEME_COLOR.CYAN' },
    { value: 'navy', labelKey: 'POTS.ADD_POT.THEME_COLOR.NAVY' },
    { value: 'red', labelKey: 'POTS.ADD_POT.THEME_COLOR.RED' },
    { value: 'purple', labelKey: 'POTS.ADD_POT.THEME_COLOR.PURPLE' },
    { value: 'torquoise', labelKey: 'POTS.ADD_POT.THEME_COLOR.TORQUOISE' },
    { value: 'brown', labelKey: 'POTS.ADD_POT.THEME_COLOR.BROWN' },
    { value: 'magenta', labelKey: 'POTS.ADD_POT.THEME_COLOR.MAGENTA' },
    { value: 'blue', labelKey: 'POTS.ADD_POT.THEME_COLOR.BLUE' }
  ];

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
