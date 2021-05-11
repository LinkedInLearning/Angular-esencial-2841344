import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleatorioComponent } from './aleatorio.component';

describe('AleatorioComponent', () => {
  let component: AleatorioComponent;
  let fixture: ComponentFixture<AleatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AleatorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AleatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
