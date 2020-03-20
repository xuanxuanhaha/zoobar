import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoobargrillComponent } from './zoobargrill.component';

describe('ZoobargrillComponent', () => {
  let component: ZoobargrillComponent;
  let fixture: ComponentFixture<ZoobargrillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoobargrillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoobargrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
