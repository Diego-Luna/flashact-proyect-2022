import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionArtComponent } from './seccion-art.component';

describe('SeccionArtComponent', () => {
  let component: SeccionArtComponent;
  let fixture: ComponentFixture<SeccionArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
