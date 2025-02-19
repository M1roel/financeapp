import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddMoneyComponent } from './dialog-add-money.component';

describe('DialogAddMoneyComponent', () => {
  let component: DialogAddMoneyComponent;
  let fixture: ComponentFixture<DialogAddMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddMoneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
