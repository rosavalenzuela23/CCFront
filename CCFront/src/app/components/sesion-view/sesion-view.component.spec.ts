import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionViewComponent } from './sesion-view.component';

describe('SesionViewComponent', () => {
  let component: SesionViewComponent;
  let fixture: ComponentFixture<SesionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesionViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
