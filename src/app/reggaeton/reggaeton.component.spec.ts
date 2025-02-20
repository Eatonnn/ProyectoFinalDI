import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReggaetonComponent } from './reggaeton.component';

describe('ReggaetonComponent', () => {
  let component: ReggaetonComponent;
  let fixture: ComponentFixture<ReggaetonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReggaetonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReggaetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
