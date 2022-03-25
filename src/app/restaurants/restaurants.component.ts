import { RestaurantsSearchList } from './../models/restaurants.search.list.model';
import { RestaurantsService } from './../service/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  allRestaurants: RestaurantsSearchList = new RestaurantsSearchList();

  count: number = 0;

  params = {
    sort: 'price',
    sortDirection: 'asc',
    page: 1,
    pageSize: 5,
    filter: {
      cuisine: '',
      priceFrom: 1,
      priceTo: 5,
    },
  };

  constructor(
    private service: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      let cuisine = params['cuisine'];
      if (cuisine == 'All') cuisine = '';
      this.params.filter.cuisine = cuisine;
      this.getAllRestaurants();
    });
  }

  getAllRestaurants(): void {
    this.service
      .getAllRestaurants(this.params)
      .subscribe((restaurants: RestaurantsSearchList) => {
        this.allRestaurants = restaurants;
        this.count = restaurants.count;
      });
  }

  changeMyPage(value: number) {
    this.params.page = value;
    this.getAllRestaurants();
  }

  changeSize(value: number) {
    this.params.pageSize = value;
    this.getAllRestaurants();
  }
}
