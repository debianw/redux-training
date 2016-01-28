// TodoItem component.
import TodoItem from './';

function setup (text, completed = false, id = 0) {
  const component = TestUtils.renderIntoDocument(
    <TodoItem
      id={id}
      completed={completed}
      text={text} />
  );

  return {
    todoText  : TestUtils.findRenderedDOMComponentWithClass(component, 'todo-item__text'),
    todoLabel : TestUtils.findRenderedDOMComponentWithClass(component, 'label'),
    todoItem  : TestUtils.findRenderedDOMComponentWithClass(component, 'list-group-item'),
  };
}

describe('COMPONENT: <TodoItem />', () => {
  it('should display the Todo text', () => {
    const { todoText } = setup('Testing Todo text');
    expect(todoText.textContent).toBe('Testing Todo text');
  });

  it('should display the blue [Pending] label when the Todo is not completed', () => {
    const { todoLabel } = setup('Testing Todo label');
    expect(todoLabel.className).toInclude('label-info');
    expect(todoLabel.textContent).toBe('Pending');
  });

  it('should display the green [Completed] label when the Todo is completed', () => {
    const { todoLabel } = setup('Testing Todo label', true);
    expect(todoLabel.className).toInclude('label-success');
    expect(todoLabel.textContent).toBe('Completed');
  });

  it('should disable the Todo if it is completed', () => {
    const { todoItem } = setup('Testing Todo completed', true);
    expect(todoItem.className).toInclude('completed');
  });
});
