import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngradientComponent } from './ingradient.component';

describe('IngradientComponent', () => {
  let component: IngradientComponent;
  let fixture: ComponentFixture<IngradientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngradientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
