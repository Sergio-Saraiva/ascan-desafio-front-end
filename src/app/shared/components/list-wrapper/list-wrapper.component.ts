import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-wrapper',
  templateUrl: './list-wrapper.component.html',
  styleUrls: ['./list-wrapper.component.css'],
})
export class ListWrapperComponent implements OnInit {
  formGroup: FormGroup;

  @Input() isLoading: boolean;
  @Input() title: string;
  @Input() path: string;
  @Input() hasPrevious: boolean;
  @Input() hasNext: boolean;

  @Output() callPreviousPage = new EventEmitter();
  @Output() callNextPage = new EventEmitter();
  @Output() searchValue = new EventEmitter();
  @Output() searchCleared = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      search: new FormControl(''),
    });
  }

  formSubmit() {
    let search = this.formGroup.value.search;
    if (search.trim() !== '') {
      window.scrollTo(0, 0);
      this.searchValue.emit(search);
    }
    if (search.trim() === '') {
      this.clearSearch();
    }
  }

  clearSearch() {
    this.formGroup.controls.search.markAsPristine();
    this.formGroup.controls.search.setValue('');
    this.searchCleared.emit();
  }

  emitCallPreviousPage() {
    this.callPreviousPage.emit();
  }

  emitCallNextPage() {
    this.callNextPage.emit();
  }
}
