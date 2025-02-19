import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddPotComponent } from '../../dialogs/dialog-add-pot/dialog-add-pot.component';
import { DialogEditPotComponent } from '../../dialogs/dialog-edit-pot/dialog-edit-pot.component';
import { DialogDeletePotComponent } from '../../dialogs/dialog-delete-pot/dialog-delete-pot.component';
import { DialogWithdrawPotComponent } from '../../dialogs/dialog-withdraw-pot/dialog-withdraw-pot.component';
import { DialogAddMoneyComponent } from '../../dialogs/dialog-add-money/dialog-add-money.component';
import { Pot } from '../../models/pot.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pots',
  standalone: true,
  imports: [
    TranslateModule,
    MatDialogModule,
    CommonModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './pots.component.html',
  styleUrl: './pots.component.scss',
})
export class PotsComponent implements OnInit {
  pot = new Pot();
  allPots: any[] = [];

  constructor(
    private translate: TranslateService,
    public dialog: MatDialog,
    @Inject(Firestore) private firestore: Firestore
  ) {}

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

  openAddDialog() {
    this.dialog.open(DialogAddPotComponent);
  }

  openEditDialog(pot: Pot) {
    this.dialog.open(DialogEditPotComponent, {
      data: pot
    });
  }

  openDeleteDialog(pot: Pot) {
    this.dialog.open(DialogDeletePotComponent, {
      data: pot
    });
  }

  openWithdrawDialog(pot: Pot) {
    this.dialog.open(DialogWithdrawPotComponent, {
      data: pot
    });
  }

  openAddMoneyDialog(pot: Pot) {
    this.dialog.open(DialogAddMoneyComponent, {
      data: pot
    });
  }
}
