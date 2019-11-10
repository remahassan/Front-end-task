import { Component } from '@angular/core';
import { HomecomponentsService } from './Service/homecomponents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'task';
  ComponentList:string[]=[];
  htmlToAdd:string;
  constructor(private homeCom:HomecomponentsService) { }


  
  ngOnInit() {
    this.ComponentList= this.homeCom.getComponents();
    console.log(this.ComponentList.includes("header"));
    
  }
}

