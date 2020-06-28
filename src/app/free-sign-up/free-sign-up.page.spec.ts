import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreeSignUpPage } from './free-sign-up.page';

describe('FreeSignUpPage', () => {
  let component: FreeSignUpPage;
  let fixture: ComponentFixture<FreeSignUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeSignUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreeSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
