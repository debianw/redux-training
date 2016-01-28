// TodoList component.
import TodoList from './';

// Child components.
import TodoItem from 'components/ui/TodoItem';

function setup (todos = []) {
  const actions = {
    onToggleTodo : expect.createSpy(),
  };

  const component = TestUtils.renderIntoDocument(
    <TodoList
      todos={todos}
      {...actions} />
  );

  return {
    todoItemComponents : TestUtils.scryRenderedComponentsWithType(component, TodoItem),
    todoItemElements   : TestUtils.scryRenderedDOMComponentsWithClass(component, 'list-group-item'),
    component,
    actions,
  };
}

describe('COMPONENT: <TodoList />', () => {
  it('should return null when doesn\'t have todos passed', () => {
    const { component } = setup();
    expect(ReactDOM.findDOMNode(component)).toBe(null);
  });

  it('should return a list of <TodoItem />s when have todos', () => {
    const { todoItemComponents } = setup([{
      id        : 1,
      text      : 'First todo',
      completed : false,
    }, {
      id        : 2,
      text      : 'Second todo',
      completed : true,
    }]);

    expect(todoItemComponents.length).toBe(2);
  });

  it('should call onToggleTodo when clicking on a <TodoItem />', () => {
    const { todoItemElements, actions } = setup([{
      id        : 1,
      text      : 'First todo',
      completed : false,
    }, {
      id        : 2,
      text      : 'Second todo',
      completed : true,
    }]);

    TestUtils.Simulate.click(todoItemElements[1]);
    expect(actions.onToggleTodo).toHaveBeenCalledWith({ id : 2 });
  });
});
