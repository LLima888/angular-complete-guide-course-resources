import { Injectable, signal } from "@angular/core";
import { InvestimentInput } from "./investiment-input.model";

@Injectable({ providedIn: 'root'}) //service available app-wide via DI 
export class InvestimentService {
    // resultData?: { //regular property
    //     year: number; 
    //     interest: number; 
    //     valueEndOfYear: number; 
    //     annualInvestment: number; 
    //     totalInterest: number; 
    //     totalAmountInvested: number 
    // }[];

    //using signal to make it reactive and auto-update any component that uses it via DI
    resultData = signal<{
        year: number; 
        interest: number; 
        valueEndOfYear: number; 
        annualInvestment: number; 
        totalInterest: number; 
        totalAmountInvested: number 
    }[] | undefined>(undefined); //signal property to hold result data


    calculateInvestmentResults(data: InvestimentInput) {
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

    this.resultData.set(annualData);
    // this.resultData = annualData;
  }
}