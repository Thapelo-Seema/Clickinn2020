import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListingFilteringPage } from './listing-filtering.page';

describe('ListingFilteringPage', () => {
  let component: ListingFilteringPage;
  let fixture: ComponentFixture<ListingFilteringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingFilteringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingFilteringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
