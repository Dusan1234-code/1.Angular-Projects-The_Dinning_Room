import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input()
  page: number = 1;

  @Input()
  pageSize: number = 5;

  @Input()
  collectionSize: number = 0;

  @Output()
  emmiter: EventEmitter<number> = new EventEmitter();

  @Output()
  secEmmiter: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  pageChange(value: number) {
    this.emmiter.emit(value);
  }

  pageSizeChange(value: number) {
    this.secEmmiter.emit(value);
  }
}
