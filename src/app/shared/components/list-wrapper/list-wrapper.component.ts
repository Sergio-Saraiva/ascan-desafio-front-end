import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-wrapper',
  templateUrl: './list-wrapper.component.html',
  styleUrls: ['./list-wrapper.component.css'],
})
export class ListWrapperComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() title: string;
  @Input() path: string;
  @Input() hasPrevious: boolean;
  @Input() hasNext: boolean;

  @Output() callPreviousPage = new EventEmitter();
  @Output() callNextPage = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  loadPreviousPage() {}

  emitCallPreviousPage() {
    this.callPreviousPage.emit();
  }

  emitCallNextPage() {
    this.callNextPage.emit();
  }
}
