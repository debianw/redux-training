// Todos View.
import TodosView from './';

function setup (todos = []) {
  const actions = {
    addTodo : expect.createSpy(),
  };

  const component = TestUtils.renderIntoDocument(
    <TodosView
      todos={todos}
      {...actions} />
  );

  return {
    newTodoText   : TestUtils.findRenderedDOMComponentWithClass(component, 'new-todo-text'),
    newTodoButton : TestUtils.findRenderedDOMComponentWithClass(component, 'new-todo-button'),
    todosDiv      : TestUtils.findRenderedDOMComponentWithClass(component, 'todo-list'),
    todoItems     : TestUtils.scryRenderedDOMComponentsWithClass(component, 'list-group-item'),
    component,
    actions,
  };
}

describe('VIEW: Todos', () => {
  it('should display a message when props.todos is empty', () => {
    const { todosDiv } = setup();
    expect(todosDiv.textContent).toBe('Have some fun! You have not todos.');
  });

  it('should display a list of todos when props.todos is populated', () => {
    const { todoItems } = setup([{
      id   : 1,
      text : 'Grab some coffee',
    }, {
      id   : 2,
      text : 'Master React',
    }]);

    expect(todoItems.length).toBe(2);
    expect(todoItems[0].textContent).toBe('Grab some coffee');
    expect(todoItems[1].textContent).toBe('Master React');
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
