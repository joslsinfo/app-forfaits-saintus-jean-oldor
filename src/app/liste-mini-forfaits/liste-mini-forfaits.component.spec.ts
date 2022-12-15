import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMiniForfaitsComponent } from './liste-mini-forfaits.component';

describe('ListeMiniForfaitsComponent', () => {
  let component: ListeMiniForfaitsComponent;
  let fixture: ComponentFixture<ListeMiniForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMiniForfaitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMiniForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
