import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideMcaMachineComponent } from './inside-mca-machine.component';

describe('InsideMcaMachineComponent', () => {
  let component: InsideMcaMachineComponent;
  let fixture: ComponentFixture<InsideMcaMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideMcaMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideMcaMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
