import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitizingComponent } from './sanitizing.component';

describe('SanitizingComponent', () => {
  let component: SanitizingComponent;
  let fixture: ComponentFixture<SanitizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanitizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
