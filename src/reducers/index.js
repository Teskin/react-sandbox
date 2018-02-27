import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  state: (state = {
    posts: PostsReducer
  }) => state
});

export default rootReducer;
