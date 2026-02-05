import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Habittracker } from './habittracker';

describe('Habittracker', () => {
  let component: Habittracker;
  let fixture: ComponentFixture<Habittracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Habittracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Habittracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
