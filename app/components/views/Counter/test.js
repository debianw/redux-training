// Counter View.
import CounterView from './';

function setup (value = 0) {
  const actions = {
    increment : expect.createSpy(),
    reset     : expect.createSpy(),
    decrement : expect.createSpy(),
  };

  const component = TestUtils.renderIntoDocument(
    <CounterView
      value={value}
      {...actions} />
  );

  return {
    component   : component,
    actions     : actions,
    counterText : TestUtils.findRenderedDOMComponentWithClass(component, 'well'),
    buttons     : TestUtils.scryRenderedDOMComponentsWithTag(component, 'button'),
  };
}

describe('VIEW: Counter', () => {
  it('should display the initial count as 0', () => {
    const { counterText } = setup();
    expect(counterText.textContent).toBe('Counter: 0');
  });

  it('should call increment when clicking the [+] button', () => {
    const { actions, buttons } = setup();
    TestUtils.Simulate.click(buttons[0]);
    expect(actions.decrement).toHaveBeenCalled();
  });

  it('should call reset when clicking the [Reset] button', () => {
    const { actions, buttons } = setup();
    TestUtils.Simulate.click(buttons[1]);
    expect(actions.reset).toHaveBeenCalled();
  });

  it('should call decrement when clicking the [-] button', () => {
    const { actions, buttons } = setup();
    TestUtils.Simulate.click(buttons[2]);
    expect(actions.increment).toHaveBeenCalled();
  });
});
