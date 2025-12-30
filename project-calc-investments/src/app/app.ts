import { Component, signal } from '@angular/core';

import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { InvestimentInput } from './investiment-input.model';
import { InvestmentResults } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  resultsData = signal<{ 
    year: number; 
    interest: number; 
    valueEndOfYear: number; 
    annualInvestment: number; 
    totalInterest: number; 
    totalAmountInvested: number 
  }[] | undefined>(undefined);

  onCalculateInvestmentResults(data: InvestimentInput) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

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
  }

  protected readonly title = signal('project-calc-investments');
}
