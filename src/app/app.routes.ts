import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { PotsComponent } from './components/pots/pots.component';
import { BillsComponent } from './components/bills/bills.component';
import { BudgetsComponent } from './components/budgets/budgets.component';

export const routes: Routes = [
    {path : '', component: DashboardComponent},
    {path: 'transactions', component: TransactionsComponent},
    {path: 'pots', component: PotsComponent},
    {path: 'bills', component: BillsComponent},
    {path: 'budgets', component: BudgetsComponent}
];
