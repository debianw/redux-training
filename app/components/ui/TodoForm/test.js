// TodoForm component.
import TodoForm from './';

function setup () {
  const actions = {
    onAddTodo : expect.createSpy(),
  };

  const component = TestUtils.renderIntoDocument(
    <TodoForm
      {...actions} />
  );

  return {
    newTodoForm   : TestUtils.findRenderedDOMComponentWithTag(component, 'form'),
    newTodoButton : TestUtils.findRenderedDOMComponentWithClass(component, 'new-todo-button'),
    component,
    actions,
  };
}

describe('COMPONENT: <TodoForm />', () => {
  it('should disable the button when the input has no text', () => {
    const { component, newTodoButton } = setup();
    expect(newTodoButton.disabled).toBe(true);
    component.setState({ newTodoText : '  ' });
    expect(newTodoButton.disabled).toBe(true);
    component.setState({ newTodoText : 'hi' });
    expect(newTodoButton.disabled).toBe(false);
  });

  it('should not submit the form if the input has not text', () => {
    const { newTodoForm, actions } = setup();
    TestUtils.Simulate.submit(newTodoForm);
    expect(actions.onAddTodo).toNotHaveBeenCalled();
  });

  it('should call onAddTodo when submiting the form', () => {
    const { component, newTodoForm, actions } = setup();
    component.setState({ newTodoText : 'Adding todo' });
    TestUtils.Simulate.submit(newTodoForm);
    expect(actions.onAddTodo).toHaveBeenCalledWith({ text : 'Adding todo' });
  });
});
