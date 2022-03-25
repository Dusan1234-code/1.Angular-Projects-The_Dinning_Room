import { MenuSearchList } from './../models/menu.search.list.model';
import { RestaurantsSearchList } from './../models/restaurants.search.list.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const baseURL = 'http://localhost:3000/api/restaurants';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getAllRestaurants(params?: any): Observable<RestaurantsSearchList> {
    let queryParams = {};

    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
          .set('page', params.page || '')
          .set('pageSize', params.pageSize || '')
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }

    return this.http.get(`${baseURL}`, queryParams).pipe(
      map((data: any) => {
        return new RestaurantsSearchList(data);
      })
    );
  }

  getAllMenus(resId: number): Observable<MenuSearchList> {
    return this.http.get(`${baseURL}/${resId}/menus`).pipe(
      map((elem: any) => {
        return new MenuSearchList(elem);
      })
    );
  }
}
