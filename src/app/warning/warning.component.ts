import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: '<p>warning message</p>',
  styles:  [`p{
    width: calc(100% - 60px);
    margin: 30px 30px 0 30px;
    text-align: center;
    color:red;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 50px 0;
    border: 5px solid red;
}`]

})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}