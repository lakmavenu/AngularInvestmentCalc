import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header/header.component';
import {UserInputComponent} from './user-input/user-input.component';
import {InvestmentsService} from './investments.service';
import {annualData} from './investment-inputs.model';
import {InvestmentResultsComponent} from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InvestmentCalc';
}
