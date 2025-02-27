import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-result',
  imports: [RouterLink],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  bmi: number = 0;
  result: string = "";
  desc: string = "";

  constructor(private route: ActivatedRoute){
    this.bmi = +route.snapshot.paramMap.get('value')!;
    this.getResult();
  }

  getResult(){
    if(this.bmi>=25){
      this.result = "Exceso de peso";
      this.desc = "Tienes un peso superior al normal. Intente cuidar su peso";
    }else if(this.bmi>=18.5){
      this.result = "Normal";
      this.desc = "Tienes un peso corporal normal";
    }else{
      this.result = "Peso bajo";
      this.desc = "Tienes un peso corporal más bajo de lo normal.";
    }
  }
}
