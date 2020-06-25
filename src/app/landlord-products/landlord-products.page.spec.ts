import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandlordProductsPage } from './landlord-products.page';

describe('LandlordProductsPage', () => {
  let component: LandlordProductsPage;
  let fixture: ComponentFixture<LandlordProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandlordProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
