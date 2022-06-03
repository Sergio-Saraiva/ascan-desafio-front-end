import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-wrapper',
  templateUrl: './detail-wrapper.component.html',
  styleUrls: ['./detail-wrapper.component.css'],
})
export class DetailWrapperComponent implements OnInit {
  @Input() title: string;
  @Input() isLoading: boolean;
  @Input() path: string;
  constructor() {}

  ngOnInit(): void {}
}
