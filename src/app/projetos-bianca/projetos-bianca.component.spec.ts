import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosBiancaComponent } from './projetos-bianca.component';

describe('ProjetosBiancaComponent', () => {
  let component: ProjetosBiancaComponent;
  let fixture: ComponentFixture<ProjetosBiancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosBiancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosBiancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
