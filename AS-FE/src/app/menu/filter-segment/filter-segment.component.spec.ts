import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSegmentComponent } from './filter-segment.component';

describe('FilterSegmentComponent', () => {
  let component: FilterSegmentComponent;
  let fixture: ComponentFixture<FilterSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
