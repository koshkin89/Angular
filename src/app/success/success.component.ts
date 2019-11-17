import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  event: boolean;
  buttonName: string;

  constructor() { }

  ngOnInit() {
    this.event = true;
    this.buttonName = 'Hide';
   }
  
  clickPoint() {
    this.event = !this.event;
    this.buttonName = this.event ? 'Hide' : 'Show';
  }

}
