// Todos View.
import TodosView from './';

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
    newTodoText           : TestUtils.findRenderedDOMComponentWithClass(component, 'new-todo-text'),
    newTodoButton         : TestUtils.findRenderedDOMComponentWithClass(component, 'new-todo-button'),
    todosDiv              : TestUtils.findRenderedDOMComponentWithClass(component, 'todo-list'),
    todoItems             : TestUtils.scryRenderedDOMComponentsWithClass(component, 'list-group-item'),
    todoItemsCompleted    : TestUtils.scryRenderedDOMComponentsWithClass(component, 'list-group-item completed'),
    todoCompletedLabels   : TestUtils.scryRenderedDOMComponentsWithClass(component, 'label label-success'),
    todoUncompletedLabels : TestUtils.scryRenderedDOMComponentsWithClass(component, 'label label-info'),
    component,
    actions,
  };
}

describe('VIEW: Todos', () => {
  describe('when props.todos is empty', () => {
    it('should display a message', () => {
      const { todosDiv } = setup();
      expect(todosDiv.textContent).toBe('Have some fun! You have not todos.');
    });
  });

  describe('props.todos is populated', () => {
    it('should display a list of todos', () => {
      const { todoItems } = setup([{
        id   : 1,
        text : 'Grab some coffee',
      }, {
        id   : 2,
        text : 'Master React',
      }]);

      expect(todoItems.length).toBe(2);
      expect(todoItems[0].textContent).toBe('Pending Grab some coffee');
      expect(todoItems[1].textContent).toBe('Pending Master React');
    });

    it('should display a [Pending] label for uncompleted todos', () => {
      const { todoUncompletedLabels } = setup([{
        id   : 1,
        text : 'Grab some coffee',
      }, {
        id        : 2,
        text      : 'Master React',
        completed : true,
      }]);

      expect(todoUncompletedLabels.length).toBe(1);
      expect(todoUncompletedLabels[0].textContent).toBe('Pending');
    });

    it('should display a [Completed] label for completed todos', () => {
      const { todoCompletedLabels } = setup([{
        id   : 1,
        text : 'Grab some coffee',
      }, {
        id        : 2,
        text      : 'Master React',
        completed : true,
      }, {
        id        : 3,
        text      : 'Do some Unit Tests',
        completed : true,
      }]);

      expect(todoCompletedLabels.length).toBe(2);
      expect(todoCompletedLabels[0].textContent).toBe('Completed');
    });

    it('should disable the completed todos', () => {
      const { todoItemsCompleted } = setup([{
        id   : 1,
        text : 'Grab some coffee',
      }, {
        id        : 2,
        text      : 'Master React',
        completed : true,
      }]);

      expect(todoItemsCompleted.length).toBe(1);
      expect(todoItemsCompleted[0].textContent).toBe('Completed Master React');
    });

    it('should toggle a todo when clicking the item', () => {
      const { todoItems, actions } = setup([{
        id   : 1,
        text : 'Grab some coffee',
      }, {
        id   : 2,
        text : 'Master React',
      }]);

      TestUtils.Simulate.click(todoItems[1]);
      expect(actions.toggleTodo).toHaveBeenCalledWith({ id : 2 });
    });
  });

  it('should add a todo when clicking the button and clean the input', () => {
    const { component, newTodoButton, actions } = setup();
    component.setState({ newTodoText : 'Adding a todo' });
    TestUtils.Simulate.click(newTodoButton);

    expect(actions.addTodo).toHaveBeenCalledWith({ text : 'Adding a todo' });
    expect(component.state.newTodoText).toBe('');
  });

  it('should add a todo when pressing enter on the input', () => {
    const { component, newTodoText, actions } = setup();
    component.setState({ newTodoText : 'Adding a todo' });
    TestUtils.Simulate.keyDown(newTodoText, { keyCode : 13 });

    expect(actions.addTodo).toHaveBeenCalledWith({ text : 'Adding a todo' });
  });

  it('should not add a todo when the input is empty', () => {
    const { component, newTodoButton, actions } = setup();
    TestUtils.Simulate.click(newTodoButton);
    expect(actions.addTodo).toNotHaveBeenCalled();

    component.setState({ newTodoText : ' ' });
    TestUtils.Simulate.click(newTodoButton);
    expect(actions.addTodo).toNotHaveBeenCalled();
  });
});
