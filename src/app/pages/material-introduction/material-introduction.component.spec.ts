import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialIntroductionComponent } from './material-introduction.component';

describe('MaterialIntroductionComponent', () => {
  let component: MaterialIntroductionComponent;
  let fixture: ComponentFixture<MaterialIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialIntroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
