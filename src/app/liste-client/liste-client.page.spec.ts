import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeClientPage } from './liste-client.page';

describe('ListeClientPage', () => {
  let component: ListeClientPage;
  let fixture: ComponentFixture<ListeClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
