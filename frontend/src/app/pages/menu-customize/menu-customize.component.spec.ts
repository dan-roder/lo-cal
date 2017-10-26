import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCustomizeComponent } from './menu-customize.component';

describe('MenuCustomizeComponent', () => {
  let component: MenuCustomizeComponent;
  let fixture: ComponentFixture<MenuCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
