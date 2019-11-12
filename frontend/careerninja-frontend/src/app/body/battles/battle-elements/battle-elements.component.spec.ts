import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleElementsComponent } from './battle-elements.component';

describe('BattleElementsComponent', () => {
  let component: BattleElementsComponent;
  let fixture: ComponentFixture<BattleElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
