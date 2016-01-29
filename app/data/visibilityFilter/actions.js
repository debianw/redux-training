// Visibility Filter constants.
import * as constants from 'utils/constants';

export function setFilter (filter) {
  return {
    type : constants.VISIBILITY_FILTER_SET,
    filter,
  };
}
