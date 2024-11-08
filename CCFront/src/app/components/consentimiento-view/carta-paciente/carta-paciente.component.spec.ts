import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPacienteComponent } from './carta-paciente.component';

describe('CartaPacienteComponent', () => {
  let component: CartaPacienteComponent;
  let fixture: ComponentFixture<CartaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
