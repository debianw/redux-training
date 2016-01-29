// Constants.
import * as constants from 'utils/constants';

export default function visibilityFilterReducer (state = constants.VISIBILITY_FILTER_ALL, action) {
  switch (action.type) {
  case constants.VISIBILITY_FILTER_SET:
    return action.filter;

  default:
    return state;
  }
}
