import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolsSignUpPage } from './tools-sign-up.page';

describe('ToolsSignUpPage', () => {
  let component: ToolsSignUpPage;
  let fixture: ComponentFixture<ToolsSignUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsSignUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolsSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
