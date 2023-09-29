import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangedGameComponent } from './hanged-game.component';

describe('HangedGameComponent', () => {
  let component: HangedGameComponent;
  let fixture: ComponentFixture<HangedGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangedGameComponent]
    });
    fixture = TestBed.createComponent(HangedGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
