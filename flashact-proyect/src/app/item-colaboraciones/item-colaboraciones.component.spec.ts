import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemColaboracionesComponent } from './item-colaboraciones.component';

describe('ItemColaboracionesComponent', () => {
  let component: ItemColaboracionesComponent;
  let fixture: ComponentFixture<ItemColaboracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemColaboracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemColaboracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
