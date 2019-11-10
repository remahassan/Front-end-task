import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating'


@Component({
  selector: 'app-threeblock',
  templateUrl: './threeblock.component.html',
  styleUrls: ['./threeblock.component.css']
})
export class ThreeblockComponent implements OnInit {

  constructor() { }
  Tops: any[] = [
    { "img":"../../assets/24.jpg","name": "Product title here", "price": "68.00" ,"rate":4},
    { "img":"../../assets/new 05.png","name": "Product title here", "price": "68.00" ,"rate":4},
    { "img":"../../assets/new 07.png","name": "Product title here", "price": "68.00" ,"rate":4}
];

Bests: any[] = [
  { "img":"../../assets/trending 2.jpg","name": "Product title here", "price": "68.00" ,"rate":4},
  { "img":"../../assets/trending 4.jpg","name": "Product title here", "price": "68.00" ,"rate":4},
  { "img":"../../assets/trending 1.jpg","name": "Product title here", "price": "68.00" ,"rate":4}
];

Populars: any[] = [
  { "img":"../../assets/38.jpg","name": "Product title here", "price": "68.00" ,"rate":4},
  { "img":"../../assets/trending 5.jpg","name": "Product title here", "price": "68.00" ,"rate":4},
  { "img":"../../assets/trending 3.jpg","name": "Product title here", "price": "68.00" ,"rate":4}
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
