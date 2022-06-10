import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallStageComponent } from './small-stage.component';

describe('SmallStageComponent', () => {
  let component: SmallStageComponent;
  let fixture: ComponentFixture<SmallStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
