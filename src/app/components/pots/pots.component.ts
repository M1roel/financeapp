import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddPotComponent } from '../../dialogs/dialog-add-pot/dialog-add-pot.component';


@Component({
  selector: 'app-pots',
  standalone: true,
  imports: [TranslateModule, MatDialogModule],
  templateUrl: './pots.component.html',
  styleUrl: './pots.component.scss'
})
export class PotsComponent {

  constructor(private translate: TranslateService, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogAddPotComponent);
  }

}
