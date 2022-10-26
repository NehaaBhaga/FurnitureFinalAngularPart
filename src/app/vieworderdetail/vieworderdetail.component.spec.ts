import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderdetailComponent } from './vieworderdetail.component';

describe('VieworderdetailComponent', () => {
  let component: VieworderdetailComponent;
  let fixture: ComponentFixture<VieworderdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworderdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
