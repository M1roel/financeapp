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

  colorOptions = [
    { value: 'theme01', labelKey: 'POTS.ADD_POT.THEME_COLOR.GREEN' },
    { value: 'theme02', labelKey: 'POTS.ADD_POT.THEME_COLOR.YELLOW' },
    { value: 'theme03', labelKey: 'POTS.ADD_POT.THEME_COLOR.CYAN' },
    { value: 'theme04', labelKey: 'POTS.ADD_POT.THEME_COLOR.NAVY' },
    { value: 'theme05', labelKey: 'POTS.ADD_POT.THEME_COLOR.RED' },
    { value: 'theme06', labelKey: 'POTS.ADD_POT.THEME_COLOR.PURPLE' },
    { value: 'theme07', labelKey: 'POTS.ADD_POT.THEME_COLOR.TORQUOISE' },
    { value: 'theme08', labelKey: 'POTS.ADD_POT.THEME_COLOR.BROWN' },
    { value: 'theme09', labelKey: 'POTS.ADD_POT.THEME_COLOR.MAGENTA' },
    { value: 'theme10', labelKey: 'POTS.ADD_POT.THEME_COLOR.BLUE' }
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
      const selectedColor = this.colorOptions.find(color => color.value === this.pot.theme_color);
      this.pot.theme_color = selectedColor ? selectedColor.labelKey : '';
  
      await addDoc(collection(this.firestore, 'pots'), this.pot.toJSON());
      this.closeDialog();
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Pots:', error);
    }
  }
  
}
