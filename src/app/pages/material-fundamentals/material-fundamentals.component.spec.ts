import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFundamentalsComponent } from './material-fundamentals.component';

describe('MaterialFundamentalsComponent', () => {
  let component: MaterialFundamentalsComponent;
  let fixture: ComponentFixture<MaterialFundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialFundamentalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
