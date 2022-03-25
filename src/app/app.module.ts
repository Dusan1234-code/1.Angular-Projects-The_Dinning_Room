import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { AboutComponent } from './core/about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ChildRestaurantComponent } from './restaurants/child-restaurant/child-restaurant.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './core/pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './restaurants/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    AboutComponent,
    RestaurantsComponent,
    ChildRestaurantComponent,
    PaginationComponent,
    DialogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
