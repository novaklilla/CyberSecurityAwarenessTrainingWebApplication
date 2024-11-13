import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialMobilDevicesComponent } from './material-mobil-devices.component';

describe('MaterialMobilDevicesComponent', () => {
  let component: MaterialMobilDevicesComponent;
  let fixture: ComponentFixture<MaterialMobilDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialMobilDevicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialMobilDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
