import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditListingPage } from './edit-listing.page';

describe('EditListingPage', () => {
  let component: EditListingPage;
  let fixture: ComponentFixture<EditListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
