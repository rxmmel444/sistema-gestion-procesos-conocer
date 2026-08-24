import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputCheckbox } from './ui-input-checkbox';

describe('UiInputCheckbox', () => {
  let component: UiInputCheckbox;
  let fixture: ComponentFixture<UiInputCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInputCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiInputCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
