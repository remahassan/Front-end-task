import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(()=>
      {
        $('.countdown').downCount({
          date: '06/06/2020 12:00:00'
        });

        $('.countdown').downCount({
          date: '06/06/2015 12:00:00',
          offset: +1
        });
      })
  }

}
