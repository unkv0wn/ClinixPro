import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServicePaymentComponent } from './new-service-payment.component';

describe('NewServicePaymentComponent', () => {
  let component: NewServicePaymentComponent;
  let fixture: ComponentFixture<NewServicePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewServicePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewServicePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
