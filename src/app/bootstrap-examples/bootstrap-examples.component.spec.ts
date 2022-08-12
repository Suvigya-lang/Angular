import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapExamplesComponent } from './bootstrap-examples.component';

describe('BootstrapExamplesComponent', () => {
  let component: BootstrapExamplesComponent;
  let fixture: ComponentFixture<BootstrapExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
