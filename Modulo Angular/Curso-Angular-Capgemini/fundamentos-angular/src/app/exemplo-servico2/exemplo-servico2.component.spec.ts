import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServico2Component } from './exemplo-servico2.component';

describe('ExemploServico2Component', () => {
  let component: ExemploServico2Component;
  let fixture: ComponentFixture<ExemploServico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploServico2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploServico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
