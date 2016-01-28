// Counter constants.
import * as constants from 'utils/constants';

export function increment () {
  return {
    type : constants.COUNTER_INCREMENT,
  };
}

export function decrement () {
  return {
    type : constants.COUNTER_DECREMENT,
  };
}

export function reset () {
  return {
    type : constants.COUNTER_RESET,
  };
}
