import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPromocionComponent } from './item-promocion.component';

describe('ItemPromocionComponent', () => {
  let component: ItemPromocionComponent;
  let fixture: ComponentFixture<ItemPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPromocionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
