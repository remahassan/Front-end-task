import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CollectionitemsComponent } from './collectionitems/collectionitems.component';
import { NewarrivalComponent } from './newarrival/newarrival.component';
import { DealComponent } from './deal/deal.component';
import { TrendingComponent } from './trending/trending.component';
import { RatingModule } from 'ng-starrating';
import { ThreeblockComponent } from './threeblock/threeblock.component';
import { BrandsComponent } from './brands/brands.component';
import { QuestionComponent } from './question/question.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { GetCopmponentDirective } from './Directive/get-copmponent.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionitemsComponent,
    NewarrivalComponent,
    DealComponent,
    TrendingComponent,
    ThreeblockComponent,
    BrandsComponent,
    QuestionComponent,
    FooterComponent,
    CopyrightComponent,
    GetCopmponentDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
