import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintanenceTasksPage } from './maintanence-tasks.page';

describe('MaintanenceTasksPage', () => {
  let component: MaintanenceTasksPage;
  let fixture: ComponentFixture<MaintanenceTasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintanenceTasksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintanenceTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
