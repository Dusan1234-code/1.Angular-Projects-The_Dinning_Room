import { Menu } from './menu.model';
export class MenuSearchList {
  count: number;
  results: Menu[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj && obj.results && obj.results.map((elem: any) => new Menu(elem))) ||
      [];
  }
}
