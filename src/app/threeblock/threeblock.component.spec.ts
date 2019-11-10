import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeblockComponent } from './threeblock.component';

describe('ThreeblockComponent', () => {
  let component: ThreeblockComponent;
  let fixture: ComponentFixture<ThreeblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
