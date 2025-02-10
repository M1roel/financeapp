import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  allBilance: any[] = [];

  constructor(
    @Inject(Firestore) private firestore: Firestore,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    const bilanceCollection = collection(this.firestore, 'bilance');

    collectionData(bilanceCollection, { idField: 'id' }).subscribe(
      (changes: any) => {
        console.log(changes);
        this.allBilance = changes;

        // Assuming the first document contains the current balance
        if (this.allBilance.length > 0) {
          Object.assign(this.bilance, this.allBilance[0]);
        }
      }
    );
  }
}
