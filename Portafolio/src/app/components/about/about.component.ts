import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
//Aca se edita lo que se vera en el Front
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public web: string;

  constructor(){
  	this.title = "Giovanni Sierra Rico";
  	this.subtitle = "Desarrollador Fronted";
  	this.web = "sierrarico83@gmail.com";
  }

  ngOnInit() {
  }

}
