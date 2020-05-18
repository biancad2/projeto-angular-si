import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProjetosBiancaComponent } from './detalhes-projetos-bianca.component';

describe('DetalhesProjetosBiancaComponent', () => {
  let component: DetalhesProjetosBiancaComponent;
  let fixture: ComponentFixture<DetalhesProjetosBiancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesProjetosBiancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesProjetosBiancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
