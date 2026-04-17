import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosPage } from './contatos-page';

describe('ContatosPage', () => {
  let component: ContatosPage;
  let fixture: ComponentFixture<ContatosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContatosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
