import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigStageComponent } from './big-stage.component';

describe('BigStageComponent', () => {
  let component: BigStageComponent;
  let fixture: ComponentFixture<BigStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
