import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvaluarPage } from './evaluar.page';

describe('EvaluarPage', () => {
  let component: EvaluarPage;
  let fixture: ComponentFixture<EvaluarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvaluarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
