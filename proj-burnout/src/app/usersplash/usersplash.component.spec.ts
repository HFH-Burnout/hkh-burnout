import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersplashComponent } from './usersplash.component';

describe('UsersplashComponent', () => {
  let component: UsersplashComponent;
  let fixture: ComponentFixture<UsersplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
