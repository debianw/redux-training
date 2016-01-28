// Todos View.
import TodosView from './';

// Child components.
import { Alert } from 'react-bootstrap';
import TodoForm  from 'components/ui/TodoForm';
import TodoList  from 'components/ui/TodoList';

function setup (todos = []) {
  const actions = {
    addTodo    : expect.createSpy(),
    toggleTodo : expect.createSpy(),
  };

  const component = TestUtils.renderIntoDocument(
    <TodosView
      todos={todos}
      {...actions} />
  );

  return {
    emptyTodosAlert   : TestUtils.scryRenderedComponentsWithType(component, Alert),
    todoFormComponent : TestUtils.findRenderedComponentWithType(component, TodoForm),
    todoListComponent : TestUtils.scryRenderedComponentsWithType(component, TodoList),
    component,
    actions,
  };
}

describe('VIEW: Todos', () => {
  it('should render an <Alert /> when there is not Todos', () => {
    const { emptyTodosAlert } = setup();
    expect(emptyTodosAlert.length).toBe(1);
  });

  it('should render a <TodoList /> when there is Todos', () => {
    const { todoListComponent } = setup([{
      id   : 1,
      text : 'A todo',
    }]);

    expect(todoListComponent.length).toBe(1);
  });
});
