import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomStatusPage } from './room-status.page';

describe('RoomStatusPage', () => {
  let component: RoomStatusPage;
  let fixture: ComponentFixture<RoomStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
