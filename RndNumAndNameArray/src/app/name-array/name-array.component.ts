import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-array',
  templateUrl: './name-array.component.html',
  styleUrls: ['./name-array.component.scss']
})
export class NameArrayComponent implements OnInit {
  nameArr: string[] = ['Andrew', 'John', 'Mike', 'Tom'];
  inputNames: string = "";
  constructor() { }
  deleteName(idx){
    this.nameArr.splice(idx, 1);
  }
  addName(){
    this.nameArr.push(this.inputNames);
    console.log(this.nameArr);
  }
  ngOnInit() {
  }

}
