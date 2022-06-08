import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideMcaComponent } from './inside-mca.component';

describe('InsideMcaComponent', () => {
  let component: InsideMcaComponent;
  let fixture: ComponentFixture<InsideMcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideMcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideMcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
