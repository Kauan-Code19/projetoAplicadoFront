import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasHorariosComponent } from './dias-horarios.component';

describe('DiasHorariosComponent', () => {
  let component: DiasHorariosComponent;
  let fixture: ComponentFixture<DiasHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiasHorariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiasHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
