import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekvizitComponent } from './rekvizit.component';

describe('RekvizitComponent', () => {
  let component: RekvizitComponent;
  let fixture: ComponentFixture<RekvizitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekvizitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekvizitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
