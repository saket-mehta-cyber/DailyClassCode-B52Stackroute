import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
 @Output() regEvent=new EventEmitter<string>()
  
}
