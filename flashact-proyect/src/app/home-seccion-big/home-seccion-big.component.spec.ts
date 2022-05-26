import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSeccionBigComponent } from './home-seccion-big.component';

describe('HomeSeccionBigComponent', () => {
  let component: HomeSeccionBigComponent;
  let fixture: ComponentFixture<HomeSeccionBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSeccionBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSeccionBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
