import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input:number=0;
  output=0.00;
  title = 'currency';

  base:any=0;
  to:any=0;
  res=0.00

  convert(c:any,a:any,b:any){
    this.input=c;
    this.base=Number(a);
    this.to=Number(b);
     this.output= (this.input * (this.to/this.base));
     this.res=this.output;
     console.log(this.base);
     console.log(this.to);
     console.log(this.input);
  }
}
