import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWithdrawPotComponent } from './dialog-withdraw-pot.component';

describe('DialogWithdrawPotComponent', () => {
  let component: DialogWithdrawPotComponent;
  let fixture: ComponentFixture<DialogWithdrawPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogWithdrawPotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogWithdrawPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
