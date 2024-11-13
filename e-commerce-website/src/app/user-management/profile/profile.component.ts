import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(123) 456-7890'
  };

  constructor() {}


  saveChanges() {
    // Implement save logic here
    console.log('User data updated:', this.user);
    // You would typically send this data to your backend API
  }

}
