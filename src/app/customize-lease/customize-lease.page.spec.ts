import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomizeLeasePage } from './customize-lease.page';

describe('CustomizeLeasePage', () => {
  let component: CustomizeLeasePage;
  let fixture: ComponentFixture<CustomizeLeasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeLeasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizeLeasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
