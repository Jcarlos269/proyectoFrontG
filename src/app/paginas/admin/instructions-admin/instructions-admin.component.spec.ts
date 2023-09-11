import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsAdminComponent } from './instructions-admin.component';

describe('InstructionsAdminComponent', () => {
  let component: InstructionsAdminComponent;
  let fixture: ComponentFixture<InstructionsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructionsAdminComponent]
    });
    fixture = TestBed.createComponent(InstructionsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
