import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServico1Component } from './exemplo-servico1.component';

describe('ExemploServico1Component', () => {
  let component: ExemploServico1Component;
  let fixture: ComponentFixture<ExemploServico1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploServico1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploServico1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
