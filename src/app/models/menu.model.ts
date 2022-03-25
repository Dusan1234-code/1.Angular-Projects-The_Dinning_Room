export class Menu {
  _id: number;
  restaurants: number;
  items: Item[];

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.restaurants = (obj && obj.restaurants) || 0;
    this.items = (obj && obj.items.map((x: any) => new Item(x))) || [];
  }
}

export class Item {
  name: string;
  price: number;

  constructor(obj?: any) {
    this.name = (obj && obj.name) || '';
    this.price = (obj && obj.price) || 0;
  }
}
