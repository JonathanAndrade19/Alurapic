import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoNameComponent } from './photo-name.component';

describe('PhotoNameComponent', () => {
  let component: PhotoNameComponent;
  let fixture: ComponentFixture<PhotoNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
