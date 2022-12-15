import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeForfaitsCompletsComponent } from './liste-forfaits-complets.component';

describe('ListeForfaitsCompletsComponent', () => {
  let component: ListeForfaitsCompletsComponent;
  let fixture: ComponentFixture<ListeForfaitsCompletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeForfaitsCompletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeForfaitsCompletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
