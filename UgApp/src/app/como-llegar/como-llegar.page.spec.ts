import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComoLlegarPage } from './como-llegar.page';

describe('ComoLlegarPage', () => {
  let component: ComoLlegarPage;
  let fixture: ComponentFixture<ComoLlegarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoLlegarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComoLlegarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
