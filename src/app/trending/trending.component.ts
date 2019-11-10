import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating'
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor() { }
   products: any[] = [
    { "img":"../../assets/trending 2.jpg","name": "Product title here", "price": "321.00" ,"rate":4},
    { "img":"../../assets/trending 4.jpg","name": "Product title here", "price": "210.00" ,"rate":3},
    { "img":"../../assets/trending 1.jpg","name": "Product title here", "price": "165.00" ,"rate":5},
    { "img":"../../assets/trending 5.jpg","name": "Product title here", "price": "190.00" ,"rate":3},
    { "img":"../../assets/trending 3.jpg","name": "Product title here", "price": "302.00" ,"rate":4 }

];

  ngOnInit() {
    
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
