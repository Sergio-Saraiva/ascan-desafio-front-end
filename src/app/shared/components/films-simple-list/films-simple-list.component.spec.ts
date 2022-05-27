import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsSimpleListComponent } from './films-simple-list.component';

describe('FilmsSimpleListComponent', () => {
  let component: FilmsSimpleListComponent;
  let fixture: ComponentFixture<FilmsSimpleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsSimpleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsSimpleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
