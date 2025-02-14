import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-add-pot',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './dialog-add-pot.component.html',
  styleUrl: './dialog-add-pot.component.scss'
})
export class DialogAddPotComponent {

  constructor(private dialogRef: MatDialogRef<DialogAddPotComponent>) { }

  closeDialog() {
    this.dialogRef.close();
  }

  addPot(){
    // Add pot logic here
  } 
}
