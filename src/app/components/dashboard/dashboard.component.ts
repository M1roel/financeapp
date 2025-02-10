import { Component, OnInit, Inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Bilance } from '../../models/bilance.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bilance = new Bilance();

  constructor(
    @Inject(Firestore) private firestore: Firestore
  ) {}

  ngOnInit(): void {
    const bilanceCollection = collection(this.firestore, 'bilance');

    collectionData(bilanceCollection, { idField: 'id' }).subscribe(
      (changes: any) => {
        console.log(changes);

        if (changes.length > 0) {
          Object.assign(this.bilance, changes[0]);
        }
      }
    );
  }
}