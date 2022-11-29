import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTileComponent } from './stock-tile.component';

describe('StockTileComponent', () => {
  let component: StockTileComponent;
  let fixture: ComponentFixture<StockTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockTileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StockTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
