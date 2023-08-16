import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphWrapComponent } from './paragraph-wrap.component';

describe('ParagraphWrapComponent', () => {
  let component: ParagraphWrapComponent;
  let fixture: ComponentFixture<ParagraphWrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParagraphWrapComponent]
    });
    fixture = TestBed.createComponent(ParagraphWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
