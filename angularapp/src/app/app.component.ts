import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input:number=0;
  output=0;
  title = 'currency';

  base:any=0;
  to:any=0;
  res='0.00'

  convert(c:any,a:any,b:any){
    this.input=c;
    this.base=Number(a);
    this.to=Number(b);
     this.output= Math.round(this.input * (this.to/this.base));
     this.res=this.output.toString().concat(".00");
     console.log(this.base);
     console.log(this.to);
     console.log(this.input);
  }
}
