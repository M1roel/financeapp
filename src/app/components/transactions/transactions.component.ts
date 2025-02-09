import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  category: string;
  sender: string;
  date: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sender: 'Peter Pfautsch', category: 'Bill', date: '12 Aug 2025', amount: 12.00}
];

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    TranslateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  displayedColumns: string[] = ['sender', 'category', 'date', 'amount'];
  dataSource = ELEMENT_DATA;
}
