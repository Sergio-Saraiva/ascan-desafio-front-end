import { Component, OnInit } from '@angular/core';
import { getPageQueryHelper } from '../../helper/page-query-helper';
import { APIResponseInterface } from '../../interfaces/api-response-interface';
import { ServiceBaseGet } from '../../services/service-base-get';
import { UrlParamService } from '../../services/urlparam.service';

@Component({
  selector: 'app-base-list-component',
  templateUrl: './base-list-component.component.html',
  styleUrls: ['./base-list-component.component.css'],
})
export class BaseListComponentComponent<T> implements OnInit {
  data: T[];
  hasPrevious: boolean;
  previous: string;
  hasNext: boolean;
  next: string;
  isLoading: boolean;
  constructor(
    private apiService: ServiceBaseGet<T>,
    private urlParamService: UrlParamService
  ) {}

  ngOnInit(): void {
    this.getAll(null);
  }

  getAll(query?: string) {
    this.isLoading = true;
    this.apiService.getAll(query).subscribe(
      (data) => {
        data.results.map((d) => this.urlParamService.fillSingleUrlParam(d));
        this.fillPages(data);
      },
      (_) => {},
      () => (this.isLoading = false)
    );
  }

  fillPages(data: APIResponseInterface<T>) {
    this.data = data.results;
    if (data.previous !== null) {
      this.hasPrevious = true;
      this.previous = data.previous;
    } else {
      this.hasPrevious = false;
      this.previous = null;
    }
    if (data.next !== null) {
      this.hasNext = true;
      this.next = data.next;
    } else {
      this.hasNext = false;
      this.next = null;
    }
  }

  loadNextPage() {
    let nextCallPage = getPageQueryHelper(this.next);
    window.scrollTo(0, 0);
    this.getAll(nextCallPage);
  }

  loadPreviousPage() {
    let previousCallPage = getPageQueryHelper(this.previous);
    window.scrollTo(0, 0);
    this.getAll(previousCallPage);
  }

  searchFilter(search) {
    let query = `search=${search}`;
    window.scrollTo(0, 0);
    this.getAll(query);
  }

  clearSearchFilter() {
    this.getAll();
  }
}
