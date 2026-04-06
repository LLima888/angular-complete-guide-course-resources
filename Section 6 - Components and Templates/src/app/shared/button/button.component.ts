import { Component } from '@angular/core';

@Component({
  // This selector allows us to use the component as an attribute on a button element
  // This is a common pattern for creating reusable button components that can be easily styled and used throughout the application
  // By using 'button[appButton]', we can apply the styles and functionality of the ButtonComponent to any button element that has the 'appButton' attribute
  // This approach extends the functionality of standard HTML buttons while maintaining their native behavior and accessibility features
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
