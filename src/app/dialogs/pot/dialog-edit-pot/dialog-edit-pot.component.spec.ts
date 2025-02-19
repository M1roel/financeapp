import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditPotComponent } from './dialog-edit-pot.component';

describe('DialogEditPotComponent', () => {
  let component: DialogEditPotComponent;
  let fixture: ComponentFixture<DialogEditPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditPotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
