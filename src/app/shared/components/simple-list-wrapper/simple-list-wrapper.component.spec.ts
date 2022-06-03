import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleListWrapperComponent } from './simple-list-wrapper.component';

describe('SimpleListWrapperComponent', () => {
  let component: SimpleListWrapperComponent;
  let fixture: ComponentFixture<SimpleListWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleListWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
