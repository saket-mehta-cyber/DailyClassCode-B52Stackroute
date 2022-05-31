import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
 
  data;
  constructor() {
     this.data = "";
     this.title = "Using RxJs with Angular";
     let a = this.getData();
  }
  getData() {
     const response =
     ajax('https://jsonplaceholder.typicode.com/users')
        .pipe(map(e => e.response));
     response.subscribe(res => {
        console.log(res);
        this.data = res;
     });
  }
}
