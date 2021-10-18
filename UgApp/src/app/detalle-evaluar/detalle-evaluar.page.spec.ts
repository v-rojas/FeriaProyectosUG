import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleEvaluarPage } from './detalle-evaluar.page';

describe('DetalleEvaluarPage', () => {
  let component: DetalleEvaluarPage;
  let fixture: ComponentFixture<DetalleEvaluarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEvaluarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleEvaluarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
