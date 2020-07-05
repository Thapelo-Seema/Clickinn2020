import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandlordProfilePage } from './landlord-profile.page';

describe('LandlordProfilePage', () => {
  let component: LandlordProfilePage;
  let fixture: ComponentFixture<LandlordProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandlordProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
