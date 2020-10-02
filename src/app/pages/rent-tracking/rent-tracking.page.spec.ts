import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentTrackingPage } from './rent-tracking.page';

describe('RentTrackingPage', () => {
  let component: RentTrackingPage;
  let fixture: ComponentFixture<RentTrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentTrackingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
