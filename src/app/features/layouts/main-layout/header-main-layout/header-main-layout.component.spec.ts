import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMainLayoutComponent } from './header-main-layout.component';

describe('HeaderMainLayoutComponent', () => {
  let component: HeaderMainLayoutComponent;
  let fixture: ComponentFixture<HeaderMainLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMainLayoutComponent]
    });
    fixture = TestBed.createComponent(HeaderMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
