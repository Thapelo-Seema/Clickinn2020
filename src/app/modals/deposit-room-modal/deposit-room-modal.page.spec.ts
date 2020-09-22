import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepositRoomModalPage } from './deposit-room-modal.page';

describe('DepositRoomModalPage', () => {
  let component: DepositRoomModalPage;
  let fixture: ComponentFixture<DepositRoomModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositRoomModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepositRoomModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
