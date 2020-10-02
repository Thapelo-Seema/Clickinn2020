import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagementAdminPage } from './management-admin.page';

describe('ManagementAdminPage', () => {
  let component: ManagementAdminPage;
  let fixture: ComponentFixture<ManagementAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagementAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
