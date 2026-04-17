import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosCard } from './contatos-card';

describe('ContatosCard', () => {
  let component: ContatosCard;
  let fixture: ComponentFixture<ContatosCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatosCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ContatosCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
