import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TenantRoomChecklistPage } from './tenant-room-checklist.page';

describe('TenantRoomChecklistPage', () => {
  let component: TenantRoomChecklistPage;
  let fixture: ComponentFixture<TenantRoomChecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantRoomChecklistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TenantRoomChecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
