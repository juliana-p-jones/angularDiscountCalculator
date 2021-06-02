import { state } from '@angular/animations';
import { FormStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcalc';

  public num1!: number;
  public num2!: number;
  public num3!: number;
 
calculate(){
  this.num3 = this.num1*((100-this.num2)/100);

}
}






