import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmRoomAvailabilityPage } from './confirm-room-availability.page';

describe('ConfirmRoomAvailabilityPage', () => {
  let component: ConfirmRoomAvailabilityPage;
  let fixture: ComponentFixture<ConfirmRoomAvailabilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmRoomAvailabilityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmRoomAvailabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
