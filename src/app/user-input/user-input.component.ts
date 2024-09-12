import { Component, output, signal } from '@angular/core';
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
  calculate = output<InvestmentInputModel>();
  enteredInitialInvestement = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
  onSubmit = () => {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestement(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    });
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredInitialInvestement.set('0');
    this.enteredDuration.set('10');
  };
}
