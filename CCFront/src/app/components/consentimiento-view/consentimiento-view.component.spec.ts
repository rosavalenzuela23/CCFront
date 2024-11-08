import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentimientoViewComponent } from './consentimiento-view.component';

describe('ConsentimientoViewComponent', () => {
  let component: ConsentimientoViewComponent;
  let fixture: ComponentFixture<ConsentimientoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsentimientoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsentimientoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
