import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainLayoutComponent } from './footer-main-layout.component';

describe('FooterMainLayoutComponent', () => {
  let component: FooterMainLayoutComponent;
  let fixture: ComponentFixture<FooterMainLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterMainLayoutComponent]
    });
    fixture = TestBed.createComponent(FooterMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
