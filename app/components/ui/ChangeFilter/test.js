// Component.
import ChangeFilter from './';

function setup (text, filter, activeFilter) {
  const actions = {
    onSetFilter : expect.createSpy(),
  };

  const component = TestUtils.renderIntoDocument(
    <ChangeFilter
      filter={filter}
      activeFilter={activeFilter}
      {...actions}>{text}</ChangeFilter>
  );

  return {
    filterSpan : TestUtils.scryRenderedDOMComponentsWithTag(component, 'span'),
    filterLink : TestUtils.scryRenderedDOMComponentsWithTag(component, 'a'),
    component,
    actions,
  };
}

describe('COMPONENT: <ChangeFilter />', () => {
  it('should render the passed text', () => {
    const { component } = setup('All');
    expect(ReactDOM.findDOMNode(component).textContent).toBe('All');
  });

  it('should call onSetFilter when clicking on the link element', () => {
    const { filterLink, actions } = setup('All', 'MyFilter');
    TestUtils.Simulate.click(filterLink[0]);
    expect(actions.onSetFilter).toHaveBeenCalledWith('MyFilter');
  });

  it('should render a span instead of a link when the activeFilter is the same as the passed filter', () => {
    const { filterSpan, filterLink } = setup('All', 'MyFilter', 'MyFilter');
    expect(filterSpan.length).toBe(1);
    expect(filterLink.length).toBe(0);
  });
});
