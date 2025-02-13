import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddPotComponent } from '../../dialogs/dialog-add-pot/dialog-add-pot.component';
import { Pot } from '../../models/pot.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';


@Component({
  selector: 'app-pots',
  standalone: true,
  imports: [TranslateModule, MatDialogModule],
  templateUrl: './pots.component.html',
  styleUrl: './pots.component.scss'
})
export class PotsComponent implements OnInit {

  pot = new Pot();

  constructor(private translate: TranslateService, public dialog: MatDialog, @Inject(Firestore) private firestore: Firestore) {}
  

  ngOnInit(): void {
    const potCollection = collection(this.firestore, 'pots');

    collectionData(potCollection, { idField: 'id' }).subscribe(
      (changes: any) => {
        console.log(changes);

        if (changes.length > 0) {
          Object.assign(this.pot, changes[0]);
        }
      }
    );
  }

  openDialog() {
    this.dialog.open(DialogAddPotComponent);
  }

}
