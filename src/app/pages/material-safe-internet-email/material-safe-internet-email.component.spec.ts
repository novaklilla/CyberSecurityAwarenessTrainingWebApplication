import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSafeInternetEmailComponent } from './material-safe-internet-email.component';

describe('MaterialSafeInternetEmailComponent', () => {
  let component: MaterialSafeInternetEmailComponent;
  let fixture: ComponentFixture<MaterialSafeInternetEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialSafeInternetEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialSafeInternetEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
