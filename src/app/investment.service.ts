import { Injectable, signal } from '@angular/core';
import type { InvestmentInputModel } from './investment-input.model';
import { InvestmentResultsModel } from './investment-results/investment-results.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  resultsData = signal<InvestmentResultsModel[] | undefined>(undefined);
  calculateInvestmentResults = (data: InvestmentInputModel) => {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData.set(annualData);
  };
}
