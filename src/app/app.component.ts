import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SidenavComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'financeapp';
}
