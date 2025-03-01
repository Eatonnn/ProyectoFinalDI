import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopComponent } from './pop.component';

describe('PopComponent', () => {
  let component: PopComponent;
  let fixture: ComponentFixture<PopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
