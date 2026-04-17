import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensPage } from './mensagens-page';

describe('MensagensPage', () => {
  let component: MensagensPage;
  let fixture: ComponentFixture<MensagensPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensagensPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MensagensPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
