import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLanguagesComponent } from './modallanguages.component';

describe('ModallanguagesComponent', () => {
  let component: ModalLanguagesComponent;
  let fixture: ComponentFixture<ModalLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLanguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
