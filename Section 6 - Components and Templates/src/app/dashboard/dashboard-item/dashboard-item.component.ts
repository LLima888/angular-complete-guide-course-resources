import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // Define the input properties for the component.
  // input turns the properties into signals, which are reactive and 
  // will automatically update the view when their values change
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
  
}
