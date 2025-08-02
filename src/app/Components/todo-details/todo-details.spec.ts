import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetails } from './todo-details';

describe('TodoDetails', () => {
  let component: TodoDetails;
  let fixture: ComponentFixture<TodoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
