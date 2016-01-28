// Counter constants.
import * as constants from 'utils/constants';

export default function counterReducer (state = 0, action) {
  switch (action.type) {
  case constants.COUNTER_INCREMENT:
    return state + 1;

  case constants.COUNTER_DECREMENT:
    return state - 1;

  case constants.COUNTER_RESET:
    return 0;

  default:
    return state;
  }
}
