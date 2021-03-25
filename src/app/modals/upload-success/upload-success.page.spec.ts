import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadSuccessPage } from './upload-success.page';

describe('UploadSuccessPage', () => {
  let component: UploadSuccessPage;
  let fixture: ComponentFixture<UploadSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
