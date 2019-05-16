import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rnd-number',
  templateUrl: './rnd-number.component.html',
  styleUrls: ['./rnd-number.component.scss']
})
export class RndNumberComponent implements OnInit {
  userNum: number = 0;
  constructor() { }
  generateRndNum(){
    this.userNum = Math.floor(Math.random() * this.userNum) + 1
  }
  ngOnInit() {
  }

}
