import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsSimpleListComponent } from './planets-simple-list.component';

describe('PlanetsSimpleListComponent', () => {
  let component: PlanetsSimpleListComponent;
  let fixture: ComponentFixture<PlanetsSimpleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsSimpleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsSimpleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
