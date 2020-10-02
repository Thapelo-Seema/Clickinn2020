import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacementTrackingPage } from './placement-tracking.page';

describe('PlacementTrackingPage', () => {
  let component: PlacementTrackingPage;
  let fixture: ComponentFixture<PlacementTrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementTrackingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacementTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
