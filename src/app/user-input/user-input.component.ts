import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InvestmentInputsModel} from '../investment-inputs.model';
import {InvestmentsService} from '../investments.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment:'0'| undefined;
  enteredAnnualInvestment: '0'|undefined;
  enteredExpectedReturn: '0'|undefined;
  enteredDuration: '0'|undefined;

  constructor(private investments: InvestmentsService){

  }

  onSubmitForm(){
    this.investments.onCalculateInvestmentResults({
      initialInvestment: Number(this.enteredInitialInvestment),
      duration: Number(this.enteredDuration),
      expectedReturn: Number(this.enteredExpectedReturn),
      annualInvestment: Number(this.enteredAnnualInvestment)
    });

    this.enteredInitialInvestment='0';
    this.enteredAnnualInvestment='0';
    this.enteredExpectedReturn='0';
    this.enteredDuration='0';

  }


}
