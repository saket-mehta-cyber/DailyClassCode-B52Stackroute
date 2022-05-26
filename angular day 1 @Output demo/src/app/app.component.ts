import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  
  msg=""
  courseReg(name:string){
    this.msg=`You have selected ${name} course!`
  }
}
