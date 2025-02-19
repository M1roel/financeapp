import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pot } from '../../../models/pot.class';
import { Firestore, updateDoc, collection, collectionData, doc } from '@angular/fire/firestore';
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
  allPots: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<DialogEditPotComponent>,
    @Inject(Firestore) private firestore: Firestore,
    @Inject(MAT_DIALOG_DATA) public data: Pot
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

  async editPot() {
    if (!this.pot.id) {
      console.error('Fehler: Keine Dokument-ID vorhanden!');
      return;
    }
  
    try {
      const potDocRef = doc(this.firestore, 'pots', this.pot.id);
      await updateDoc(potDocRef, this.pot.toJSON());
      console.log('Pot erfolgreich aktualisiert:', this.pot);
      this.dialogRef.close(this.pot);
    } catch (error) {
      console.error('Fehler beim Aktualisieren des Pots:', error);
    }
  }
}
