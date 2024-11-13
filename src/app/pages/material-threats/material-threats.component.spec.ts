import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialThreatsComponent } from './material-threats.component';

describe('MaterialThreatsComponent', () => {
  let component: MaterialThreatsComponent;
  let fixture: ComponentFixture<MaterialThreatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialThreatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialThreatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
