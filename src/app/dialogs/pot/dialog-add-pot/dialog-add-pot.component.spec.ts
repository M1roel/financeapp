import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPotComponent } from './dialog-add-pot.component';

describe('DialogAddPotComponent', () => {
  let component: DialogAddPotComponent;
  let fixture: ComponentFixture<DialogAddPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddPotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
