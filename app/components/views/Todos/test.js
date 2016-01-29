// Todos View.
import TodosView from './';

// Child components.
import { Alert }     from 'react-bootstrap';
import TodoForm      from 'components/ui/TodoForm';
import ChangeFilter  from 'components/ui/ChangeFilter';
import TodoList      from 'components/ui/TodoList';
import TodoItem      from 'components/ui/TodoItem';

// Constants.
import * as constants from 'utils/constants';

function setup (todos = [], visibilityFilter = constants.VISIBILITY_FILTER_ALL) {
  const actions = {
    addTodo    : expect.createSpy(),
    toggleTodo : expect.createSpy(),
  };

  const component = TestUtils.renderIntoDocument(
    <TodosView
      todos={todos}
      visibilityFilter={visibilityFilter}
      {...actions} />
  );

  return {
    emptyTodosAlert        : TestUtils.scryRenderedComponentsWithType(component, Alert),
    todoFormComponent      : TestUtils.findRenderedComponentWithType(component, TodoForm),
    todoListComponent      : TestUtils.scryRenderedComponentsWithType(component, TodoList),
    todoItemComponents     : TestUtils.scryRenderedComponentsWithType(component, TodoItem),
    changeFilterComponents : TestUtils.scryRenderedComponentsWithType(component, ChangeFilter),
    component,
    actions,
  };
}

describe('VIEW: Todos', () => {
  const todosMock = [{
    id   : 1,
    text : 'Buy the milk',
  }, {
    id        : 2,
    text      : 'Get a beer',
    completed : true,
  }, {
    id   : 3,
    text : 'Feed the dog',
  }, {
    id        : 4,
    text      : 'Feed the cats',
    completed : true,
  }, {
    id        : 5,
    text      : 'Listen music',
    completed : true,
  }];

  it('should render an <Alert /> when there is not Todos', () => {
    const { emptyTodosAlert } = setup();
    expect(emptyTodosAlert.length).toBe(1);
  });

  it('should render a <TodoList /> and three <ChangeFilter />s when there is Todos', () => {
    const { todoListComponent, changeFilterComponents } = setup(todosMock);

    expect(todoListComponent.length).toBe(1);
    expect(changeFilterComponents.length).toBe(3);
  });

  it(`should show all todos when the visibility filter is ${constants.VISIBILITY_FILTER_ALL}`, () => {
    const { todoItemComponents } = setup(todosMock);
    expect(todoItemComponents.length).toBe(5);
  });

  it(`should show only pending todos when the visibility filter is ${constants.VISIBILITY_FILTER_UNCOMPLETED}`, () => {
    const { todoItemComponents } = setup(todosMock, constants.VISIBILITY_FILTER_UNCOMPLETED);
    expect(todoItemComponents.length).toBe(2);
  });

  it(`should show only completed todos when the visibility filter is ${constants.VISIBILITY_FILTER_COMPLETED}`, () => {
    const { todoItemComponents } = setup(todosMock, constants.VISIBILITY_FILTER_COMPLETED);
    expect(todoItemComponents.length).toBe(3);
  });
});
