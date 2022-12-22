import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitEtablissementComponent } from './forfait-etablissement.component';

describe('ForfaitEtablissementComponent', () => {
  let component: ForfaitEtablissementComponent;
  let fixture: ComponentFixture<ForfaitEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitEtablissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfaitEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
