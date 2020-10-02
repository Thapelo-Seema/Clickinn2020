import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinancialAdminPage } from './financial-admin.page';

describe('FinancialAdminPage', () => {
  let component: FinancialAdminPage;
  let fixture: ComponentFixture<FinancialAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
