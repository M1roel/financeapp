import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  category: string;
  sender: number;
  date: number;
  amount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sender: 1, category: 'Hydrogen', date: 1.0079, amount: 'H'},
  {sender: 2, category: 'Helium', date: 4.0026, amount: 'He'},
  {sender: 3, category: 'Lithium', date: 6.941, amount: 'Li'},
  {sender: 4, category: 'Beryllium', date: 9.0122, amount: 'Be'},
  {sender: 5, category: 'Boron', date: 10.811, amount: 'B'},
  {sender: 6, category: 'Carbon', date: 12.0107, amount: 'C'},
  {sender: 7, category: 'Nitrogen', date: 14.0067, amount: 'N'},
  {sender: 8, category: 'Oxygen', date: 15.9994, amount: 'O'},
  {sender: 9, category: 'Fluorine', date: 18.9984, amount: 'F'},
  {sender: 10, category: 'Neon', date: 20.1797, amount: 'Ne'},
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
