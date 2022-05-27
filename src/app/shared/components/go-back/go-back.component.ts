import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.css'],
})
export class GoBackComponent implements OnInit {
  @Input() path: string;
  displayedPath: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.displayedPath = this.path;
    if (this.path === '') {
      this.displayedPath = 'home';
    }
  }
  goTo() {
    this.router.navigate([this.path]);
  }
}
