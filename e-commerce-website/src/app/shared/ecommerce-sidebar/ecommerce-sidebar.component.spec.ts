import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceSidebarComponent } from './ecommerce-sidebar.component';

describe('EcommerceSidebarComponent', () => {
  let component: EcommerceSidebarComponent;
  let fixture: ComponentFixture<EcommerceSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcommerceSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
