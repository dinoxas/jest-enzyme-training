import { types } from '../../actions/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_POSTS:
      return payload;

    default:
      return state;
  }
};
