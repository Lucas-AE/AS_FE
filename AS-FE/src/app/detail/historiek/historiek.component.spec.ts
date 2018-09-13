import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriekComponent } from './historiek.component';

describe('HistoriekComponent', () => {
  let component: HistoriekComponent;
  let fixture: ComponentFixture<HistoriekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
