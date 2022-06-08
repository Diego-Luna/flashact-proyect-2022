import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMcaComponent } from './item-mca.component';

describe('ItemMcaComponent', () => {
  let component: ItemMcaComponent;
  let fixture: ComponentFixture<ItemMcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
