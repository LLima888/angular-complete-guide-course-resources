import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestimentService } from '../investiment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {  
  private investimentService = inject(InvestimentService); //inject service via DI with inject function

  // get results() {
  //   return this.investimentService.resultData;
  // }

  /*
  This line demonstrates Angular's reactive signals system, 
  which is a modern way to manage state and reactivity in Angular applications. 
  It combines two powerful concepts: signals and computed properties.

  This approach eliminates the need for RxJS observables or 
  manual change detection in many scenarios. 
  Instead of subscribing to observables and managing subscriptions, 
  computed signals give you a simpler, 
  more declarative way to express relationships between data.

  Remember that results() is itself a signal, 
  so you call it as a function when reading its value. 
  If you forget the parentheses, you'll get the signal object itself, 
  not the actual value.
  */
  results = computed(() => this.investimentService.resultData()); //computed to auto-update when signal changes
}
