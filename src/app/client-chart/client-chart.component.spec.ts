import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientChartComponent } from './client-chart.component';

describe('ClientChartComponent', () => {
  let component: ClientChartComponent;
  let fixture: ComponentFixture<ClientChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
