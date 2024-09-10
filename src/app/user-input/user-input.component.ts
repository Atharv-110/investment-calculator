import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInputModel } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInputModel>();
  enteredInitialInvestement = '0';
  enteredAnnualInvestment = '0';
  enteredExepctedReturn = '5';
  enteredDuration = '10';
  onSubmit = () => {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestement,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExepctedReturn,
      duration: +this.enteredDuration,
    });
  };
}
