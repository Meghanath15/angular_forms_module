import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestPostComponent } from './new-test-post.component';

describe('NewTestPostComponent', () => {
  let component: NewTestPostComponent;
  let fixture: ComponentFixture<NewTestPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTestPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTestPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
