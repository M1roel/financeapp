import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Pot } from '../../models/pot.class';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit-pot',
  standalone: true,
  imports: [TranslateModule, MatDialogModule, FormsModule, CommonModule],
  templateUrl: './dialog-edit-pot.component.html',
  styleUrl: './dialog-edit-pot.component.scss',
})
export class DialogEditPotComponent {
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
    { value: 'blue', labelKey: 'POTS.ADD_POT.THEME_COLOR.BLUE' },
  ];

  pot = new Pot();

  constructor(
    private dialogRef: MatDialogRef<DialogEditPotComponent>,
    @Inject(Firestore) private firestore: Firestore
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  editPot() {
    // Add code here
  }
}
