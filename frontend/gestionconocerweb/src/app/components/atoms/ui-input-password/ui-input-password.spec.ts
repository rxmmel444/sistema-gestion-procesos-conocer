import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputPassword } from './ui-input-password';

describe('UiInputPassword', () => {
  let component: UiInputPassword;
  let fixture: ComponentFixture<UiInputPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInputPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiInputPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
