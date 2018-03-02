import _ from 'lodash';

// We don't need to specify any directory as we have only index.js in the folder.
import {FETCH_POSTS} from '../actions/index';

// We are saying that state will be by default an object.
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log(action.payload.data); // [post1, post2]
      // We need to change the array into an object with a specific formattion {4: post} in order to have an identifier of the active post instead
      // of using another variable to do it.
      // We manage to get the result by using the Lodash mapKeys witch will take as parameters one array and one element of the itself as a string.
      return _.mapKeys(action.payload.data, 'id');
      break;
    default:
      return state;

  }
}
