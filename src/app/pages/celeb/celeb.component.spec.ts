import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebComponent } from './celeb.component';

describe('CelebComponent', () => {
  let component: CelebComponent;
  let fixture: ComponentFixture<CelebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CelebComponent]
    });
    fixture = TestBed.createComponent(CelebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
