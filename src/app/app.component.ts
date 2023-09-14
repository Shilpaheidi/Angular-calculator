import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculator';
  calValue: number = 0;
  funcT: any = '';
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;
  onClickValue(val: string, type: any) {
    if (type === 'number') {
      this.onNumberClick(val);
    } else if (type === 'function') {
      if (val === 'c') {
        // Clear button is clicked
        this.calValue = 0;
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.funcT = '';
        this.calNumber = 'noValue';
        // window.location.reload();
      } else {
        this.onFunctionClick(val);
      }
    }
  }
  
  onNumberClick(val: string){
   if(this.calNumber != 'noValue'){
     this.calNumber = this.calNumber +  val;
   }
   else {
      this.calNumber = val;
   }

   this.calValue = parseFloat(this.calNumber);
  }




  onFunctionClick(val: string) {
    if (this.funcT === '') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else {
      this.secondNumber = this.calValue;
      this.valueCalculate(this.funcT); // Calculate the previous operation
      this.funcT = val; // Update the current operator
    }
  }

 

  valueCalculate(operator: string) {
    switch (operator) {
      case '+':
        this.calValue = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.calValue = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.calValue = this.firstNumber * this.secondNumber;
        break;
      case '/':
        if (this.secondNumber !== 0) {
          this.calValue = this.firstNumber / this.secondNumber;
        } else {
          this.calValue = NaN; // Handle division by zero
        }
        break;
      case '%':
        this.calValue = (this.firstNumber * this.secondNumber) / 100;
        break;
      default:
        this.calValue = NaN; // Handle unsupported operations
        break;
    }
  
    // Reset variables
    // this.firstNumber = this.calValue;
    // this.secondNumber = 0;
    // this.funcT = 'noFunction';
    // this.calNumber = 'noValue';
    // window.location.reload();
  }
  
  
}
