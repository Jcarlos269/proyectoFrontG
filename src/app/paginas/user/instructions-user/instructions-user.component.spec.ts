import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsUserComponent } from './instructions-user.component';

describe('InstructionsUserComponent', () => {
  let component: InstructionsUserComponent;
  let fixture: ComponentFixture<InstructionsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructionsUserComponent]
    });
    fixture = TestBed.createComponent(InstructionsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
