import {Component, inject, Input} from '@angular/core';
import {annualData} from '../investment-inputs.model';
import {InvestmentsService} from '../investments.service';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
 private investmentsService = inject(InvestmentsService);

get user() {
  return this.investmentsService.resultsData;
}

}
