import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesSimpleListComponent } from './species-simple-list.component';

describe('SpeciesSimpleListComponent', () => {
  let component: SpeciesSimpleListComponent;
  let fixture: ComponentFixture<SpeciesSimpleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesSimpleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesSimpleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
