import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacementSignUpPage } from './placement-sign-up.page';

describe('PlacementSignUpPage', () => {
  let component: PlacementSignUpPage;
  let fixture: ComponentFixture<PlacementSignUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementSignUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacementSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
