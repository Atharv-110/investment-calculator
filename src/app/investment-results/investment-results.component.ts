import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { InvestmentResultsModel } from './investment-results.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  results = input<InvestmentResultsModel[]>();
}
