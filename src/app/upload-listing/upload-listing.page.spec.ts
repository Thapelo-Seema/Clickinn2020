import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadListingPage } from './upload-listing.page';

describe('UploadListingPage', () => {
  let component: UploadListingPage;
  let fixture: ComponentFixture<UploadListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
