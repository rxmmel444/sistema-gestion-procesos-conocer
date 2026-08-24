import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputLogin } from './ui-input-login';

describe('UiInputLogin', () => {
  let component: UiInputLogin;
  let fixture: ComponentFixture<UiInputLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInputLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiInputLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
