import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesViewComponent } from './sesiones-view.component';

describe('SesionesViewComponent', () => {
  let component: SesionesViewComponent;
  let fixture: ComponentFixture<SesionesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesionesViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
