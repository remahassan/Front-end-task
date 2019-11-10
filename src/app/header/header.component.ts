import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
//   ,
//   template:`      
//   <ng-template #header>
//    </ng-template>
// `
})
export class HeaderComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 

  }

  ngOnInit(){
    $(document).ready(() => {
      $(window).scroll(function(){
        var sc=$(this).scrollTop();

        if(sc>100)
        {
          $(".navbar").addClass("sticky");

        }
        if(sc<99)
        {
            $(".navbar").removeClass("sticky");
            
        }
      });

      $("a.nav-link").click(function(){
          $(".items .nav-link").css("color", "rgb( 36, 38, 40 )");
        $(this).css("color", "#b86f6f");
        

    });
    $("li.nav-item").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });

  });
  }

}
