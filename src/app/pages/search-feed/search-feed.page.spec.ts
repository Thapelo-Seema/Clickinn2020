import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchFeedPage } from './search-feed.page';

describe('SearchFeedPage', () => {
  let component: SearchFeedPage;
  let fixture: ComponentFixture<SearchFeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFeedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
