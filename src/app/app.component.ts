import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcalc';

  public num1!: number;
  public num2!: number;

calculate(){
  let result: any = this.num1*((100-this.num2)/100);
  document.getElementById('total')!.innerHTML = result;
}
}






