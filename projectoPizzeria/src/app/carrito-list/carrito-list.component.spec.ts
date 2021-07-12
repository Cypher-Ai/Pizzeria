import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoListComponent } from './carrito-list.component';

describe('CarritoListComponent', () => {
  let component: CarritoListComponent;
  let fixture: ComponentFixture<CarritoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
