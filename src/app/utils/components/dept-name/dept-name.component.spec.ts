import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptNameComponent } from './dept-name.component';

describe('DeptNameComponent', () => {
  let component: DeptNameComponent;
  let fixture: ComponentFixture<DeptNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
