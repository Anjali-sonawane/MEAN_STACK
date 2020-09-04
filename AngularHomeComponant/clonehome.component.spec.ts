import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonehomeComponent } from './clonehome.component';

describe('ClonehomeComponent', () => {
  let component: ClonehomeComponent;
  let fixture: ComponentFixture<ClonehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClonehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
