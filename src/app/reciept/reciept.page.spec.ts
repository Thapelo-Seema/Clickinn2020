import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecieptPage } from './reciept.page';

describe('RecieptPage', () => {
  let component: RecieptPage;
  let fixture: ComponentFixture<RecieptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecieptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
