import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchfeedFilteringPage } from './searchfeed-filtering.page';

describe('SearchfeedFilteringPage', () => {
  let component: SearchfeedFilteringPage;
  let fixture: ComponentFixture<SearchfeedFilteringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchfeedFilteringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchfeedFilteringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
