import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialWorkEnvironmentComponent } from './material-work-environment.component';

describe('MaterialWorkEnvironmentComponent', () => {
  let component: MaterialWorkEnvironmentComponent;
  let fixture: ComponentFixture<MaterialWorkEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialWorkEnvironmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialWorkEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
