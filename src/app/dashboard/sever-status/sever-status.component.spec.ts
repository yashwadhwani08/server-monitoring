import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverStatusComponent } from './sever-status.component';

describe('SeverStatusComponent', () => {
  let component: SeverStatusComponent;
  let fixture: ComponentFixture<SeverStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeverStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeverStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
