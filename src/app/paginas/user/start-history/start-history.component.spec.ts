import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartHistoryComponent } from './start-history.component';

describe('StartHistoryComponent', () => {
  let component: StartHistoryComponent;
  let fixture: ComponentFixture<StartHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartHistoryComponent]
    });
    fixture = TestBed.createComponent(StartHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
