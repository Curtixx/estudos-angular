import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaComponent } from './valida.component';

describe('ValidaComponent', () => {
  let component: ValidaComponent;
  let fixture: ComponentFixture<ValidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
