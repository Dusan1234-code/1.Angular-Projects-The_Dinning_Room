import { DialogComponent } from './../dialog/dialog.component';
import { Restaurant } from './../../models/restaurant.model';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-child-restaurant',
  templateUrl: './child-restaurant.component.html',
  styleUrls: ['./child-restaurant.component.css'],
})
export class ChildRestaurantComponent implements OnInit {
  @Input()
  restaurant: Restaurant = new Restaurant();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open(): void {
    const modalRef = this.modalService.open(DialogComponent);
    modalRef.componentInstance.restaurant = this.restaurant;
  }
}
