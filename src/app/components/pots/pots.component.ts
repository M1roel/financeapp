import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-pots',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './pots.component.html',
  styleUrl: './pots.component.scss'
})
export class PotsComponent {

}
