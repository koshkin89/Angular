import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stringTitle: string;
  counTer: number;
  stringMessage : string;
  hideMessage: boolean;
  styleTitle: boolean = true;
  timeLeft: number = 10;
  interval;

  start() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.counTer = this.timeLeft;
      } else {
        this.timeLeft = 10;
        this.hideMessage = !this.hideMessage;
        this.styleTitle = !this.styleTitle;
      }
    },1000)
    setTimeout(() => { clearInterval(this.interval); this.stringMessage }, 11000);
  }
  pause() {
    clearInterval(this.interval);
  }
  ngOnInit() {
    this.stringTitle = 'Alert';
    this.stringMessage = 'Has visible message';
  }
}
