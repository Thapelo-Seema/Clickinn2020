import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenantDashboardPage } from './tenant-dashboard.page';

describe('TenantDashboardPage', () => {
  let component: TenantDashboardPage;
  let fixture: ComponentFixture<TenantDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenantDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
