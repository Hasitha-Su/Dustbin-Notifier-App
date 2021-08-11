import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DustbinViewComponent } from './view.component';

describe('DustbinViewComponent', () => {
  let component: DustbinViewComponent;
  let fixture: ComponentFixture<DustbinViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DustbinViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DustbinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
