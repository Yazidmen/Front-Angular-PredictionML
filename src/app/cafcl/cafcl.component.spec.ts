import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafclComponent } from './cafcl.component';

describe('CafclComponent', () => {
  let component: CafclComponent;
  let fixture: ComponentFixture<CafclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
