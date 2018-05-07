import { TestBed, async } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { By } from '@angular/platform-browser';
import { Employee } from './employee';
import { DebugElement } from '@angular/core';

describe('Employee', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeComponent
      ],
    }).compileComponents();
  }));

  const setup = () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const component = fixture.debugElement.componentInstance;

    return { component, fixture };
  }

  it('should find delete button at first', () => {
    const { component, fixture } = setup();
    fixture.detectChanges();
    const trs = fixture.nativeElement.querySelectorAll('tr.rows');
    expect(trs.length).toBe(3);
    const tdDelete   = trs[0].cells[3].textContent;
    expect(tdDelete).toContain('delete');
  });

  it('should not find delete button if left only one Employee', () => {
    const { component, fixture } = setup();
    fixture.detectChanges();
    let a = fixture
                .debugElement
                .nativeElement
                .querySelector('tr.rows.first a');
    a.click();
    fixture.detectChanges();
    let trs = fixture.nativeElement.querySelectorAll('tr.rows');
    expect(trs.length).toBe(2);
    let tdDelete = trs[0].cells[3].textContent;

    // delete second
    a = fixture
                .debugElement
                .nativeElement
                .querySelector('tr.rows.first a');
    a.click();
    fixture.detectChanges();
    trs = fixture.nativeElement.querySelectorAll('tr.rows');
    expect(trs.length).toBe(1);
    tdDelete = trs[0].cells[3].textContent;
    expect(tdDelete).toContain('');
  });
});
