import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BursaryRequestPage } from './bursary-request.page';

describe('BursaryRequestPage', () => {
  let component: BursaryRequestPage;
  let fixture: ComponentFixture<BursaryRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BursaryRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BursaryRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
