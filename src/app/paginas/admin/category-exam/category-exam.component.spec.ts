import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryExamComponent } from './category-exam.component';

describe('CategoryExamComponent', () => {
  let component: CategoryExamComponent;
  let fixture: ComponentFixture<CategoryExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryExamComponent]
    });
    fixture = TestBed.createComponent(CategoryExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
