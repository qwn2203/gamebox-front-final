import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoloesComponent } from './consoloes.component';

describe('ConsoloesComponent', () => {
  let component: ConsoloesComponent;
  let fixture: ComponentFixture<ConsoloesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoloesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoloesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
