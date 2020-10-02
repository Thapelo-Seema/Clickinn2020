import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandlordHomePage } from './landlord-home.page';

describe('LandlordHomePage', () => {
  let component: LandlordHomePage;
  let fixture: ComponentFixture<LandlordHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandlordHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
