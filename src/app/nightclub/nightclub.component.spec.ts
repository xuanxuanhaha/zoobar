import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightclubComponent } from './nightclub.component';

describe('NightclubComponent', () => {
  let component: NightclubComponent;
  let fixture: ComponentFixture<NightclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
