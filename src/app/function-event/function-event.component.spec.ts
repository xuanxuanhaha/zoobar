import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionEventComponent } from './function-event.component';

describe('FunctionEventComponent', () => {
  let component: FunctionEventComponent;
  let fixture: ComponentFixture<FunctionEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
