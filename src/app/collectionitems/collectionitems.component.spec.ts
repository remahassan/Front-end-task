import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionitemsComponent } from './collectionitems.component';

describe('CollectionitemsComponent', () => {
  let component: CollectionitemsComponent;
  let fixture: ComponentFixture<CollectionitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
