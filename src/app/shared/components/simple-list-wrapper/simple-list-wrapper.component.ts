import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-list-wrapper',
  templateUrl: './simple-list-wrapper.component.html',
  styleUrls: ['./simple-list-wrapper.component.css'],
})
export class SimpleListWrapperComponent implements OnInit {
  @Input() title: string;
  @Input() isLoading: boolean;
  @Input() length: number;
  @Input() name: string;
  constructor() {}

  ngOnInit(): void {}
}
