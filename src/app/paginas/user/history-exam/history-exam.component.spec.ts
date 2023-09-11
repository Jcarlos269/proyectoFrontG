import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryExamComponent } from './history-exam.component';

describe('HistoryExamComponent', () => {
  let component: HistoryExamComponent;
  let fixture: ComponentFixture<HistoryExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryExamComponent]
    });
    fixture = TestBed.createComponent(HistoryExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
