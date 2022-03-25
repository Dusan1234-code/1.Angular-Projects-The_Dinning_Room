import { ActivatedRoute } from '@angular/router';
import { MenuSearchList } from './../../models/menu.search.list.model';
import { RestaurantsService } from './../../service/restaurants.service';
import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  menuId: number = 0;

  menuList: MenuSearchList = new MenuSearchList();

  @Input()
  restaurant: Restaurant = new Restaurant();

  constructor(private service: RestaurantsService) {}

  ngOnInit(): void {
    this.getAllMenus();
  }

  getAllMenus(): void {
    this.service.getAllMenus(this.restaurant._id).subscribe((elem: any) => {
      this.menuList = elem;
    });
  }
}
