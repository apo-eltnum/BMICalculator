import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  age = 25;
  weight=60;
  height=170;
  sex='Masculino';
  
  constructor(private router: Router){}

  onChangeHeight(event:any){
    this.height= event.target.value;
  }

  toggleMale(){
    this.sex="Masculino";
  }

  toggleFemale(){
    this.sex="Femenino";
  }

  getBMI(){
    const BMI = this.weight / Math.pow(this.height/100,2);   
    this.router.navigate(['/result',BMI.toFixed(1)]);
  }

}
