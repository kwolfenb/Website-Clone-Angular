import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterDealsComponent } from './winter-deals.component';

describe('WinterDealsComponent', () => {
  let component: WinterDealsComponent;
  let fixture: ComponentFixture<WinterDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
