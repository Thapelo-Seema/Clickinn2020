import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultsScanningPage } from './results-scanning.page';

describe('ResultsScanningPage', () => {
  let component: ResultsScanningPage;
  let fixture: ComponentFixture<ResultsScanningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsScanningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsScanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
