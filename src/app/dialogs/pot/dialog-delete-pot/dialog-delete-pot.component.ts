import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Pot } from '../../../models/pot.class';
import { Firestore, doc, deleteDoc, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-delete-pot',
  standalone: true,
  imports: [TranslateModule, MatDialogModule, CommonModule, FormsModule],
  templateUrl: './dialog-delete-pot.component.html',
  styleUrl: './dialog-delete-pot.component.scss'
})
export class DialogDeletePotComponent {

  pot = new Pot();  
  allPots: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<DialogDeletePotComponent>,
    @Inject(Firestore) private firestore: Firestore,
    @Inject(MAT_DIALOG_DATA) public data: Pot
  ) {}

  ngOnInit(): void {
      const potCollection = collection(this.firestore, 'pots');
  
      collectionData(potCollection, { idField: 'id' }).subscribe(
        (changes: any) => {
          console.log(changes);
          this.allPots = changes;
  
          if (this.data) {
            this.pot = new Pot(this.data);
          }
        }
      );
    }

  closeDialog() {
    this.dialogRef.close();
  }

  async deletePot(pot: Pot) {
    const potDoc = doc(this.firestore, `pots/${pot.id}`);
    try {      
      await this.closeDialog();
      await deleteDoc(potDoc);
    } catch (error) {
      console.error('Error deleting pot: ', error);
    };
  }
}
