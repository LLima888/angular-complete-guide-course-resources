import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestimentService } from '../investiment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investimentService: InvestimentService) {} //inject service via DI with regular constructor and private property

  onSubmit() {
    this.investimentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(), // + converts string to number
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
