import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Pot } from '../../models/pot.class';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
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

  pot = Pot;
  allPots: any;

  constructor(
    private dialogRef: MatDialogRef<DialogEditPotComponent>,
    @Inject(Firestore) private firestore: Firestore
  ) { }

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

  editPot() {
    // Add code here
  }
}
