import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeletePotComponent } from './dialog-delete-pot.component';

describe('DialogDeletePotComponent', () => {
  let component: DialogDeletePotComponent;
  let fixture: ComponentFixture<DialogDeletePotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDeletePotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDeletePotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
