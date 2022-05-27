import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSimpleListComponent } from './characters-simple-list.component';

describe('CharactersSimpleListComponent', () => {
  let component: CharactersSimpleListComponent;
  let fixture: ComponentFixture<CharactersSimpleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersSimpleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSimpleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
