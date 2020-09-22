import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepositPaymentPage } from './deposit-payment.page';

describe('DepositPaymentPage', () => {
  let component: DepositPaymentPage;
  let fixture: ComponentFixture<DepositPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepositPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
