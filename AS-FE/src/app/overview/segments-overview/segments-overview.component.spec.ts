import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsOverviewComponent } from './segments-overview.component';

describe('SegmentsOverviewComponent', () => {
  let component: SegmentsOverviewComponent;
  let fixture: ComponentFixture<SegmentsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
