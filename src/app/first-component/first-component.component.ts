import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponent {

  constructor(private router:Router){

  }

title: string = 'Angular';

navigateToSecond(){
  return this.router.navigate(['second']);
  
}

}
