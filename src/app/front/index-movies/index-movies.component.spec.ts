import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMoviesComponent } from './index-movies.component';

describe('IndexMoviesComponent', () => {
  let component: IndexMoviesComponent;
  let fixture: ComponentFixture<IndexMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
