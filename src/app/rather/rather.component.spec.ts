import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatherComponent } from './rather.component';

describe('RatherComponent', () => {
  let component: RatherComponent;
  let fixture: ComponentFixture<RatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
