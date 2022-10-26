import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderrequestComponent } from './vieworderrequest.component';

describe('VieworderrequestComponent', () => {
  let component: VieworderrequestComponent;
  let fixture: ComponentFixture<VieworderrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworderrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
