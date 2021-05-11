import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.scss']
})
export class AleatorioComponent implements OnInit {

  aleatorio:number = Math.floor( Math.random() *100);
  constructor() { }

  ngOnInit(): void {
  }

}
