import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagementSignUpPage } from './management-sign-up.page';

describe('ManagementSignUpPage', () => {
  let component: ManagementSignUpPage;
  let fixture: ComponentFixture<ManagementSignUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementSignUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagementSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
