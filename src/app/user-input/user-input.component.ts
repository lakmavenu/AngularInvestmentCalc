import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment:'90'| undefined;
  annualInvestment: '2'|undefined;
  expectedReturn: '3'|undefined;
  duration: '1'|undefined;

  onSubmitForm(){
    console.log(this.initialInvestment, "++", this.duration);
  }

}
