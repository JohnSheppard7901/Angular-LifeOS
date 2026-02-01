import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todopage } from './todopage';

describe('Todopage', () => {
  let component: Todopage;
  let fixture: ComponentFixture<Todopage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todopage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todopage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
