import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentAdminPage } from './agent-admin.page';

describe('AgentAdminPage', () => {
  let component: AgentAdminPage;
  let fixture: ComponentFixture<AgentAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
