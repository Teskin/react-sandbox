import {combineReducers} from 'redux';
// Redux form is all about handling any type of form that you put together with Redux
// Import a reducer from the reducer of Redux library and hook it up with our combined one.
// So, internally, Redux Form uses our redux instance for handling all the states produces by the form that is going to rendered
// on the screen.
import {reducer as formReducer} from 'redux-form';
import PostsReducer from './reducer_posts';

// We are going to wire in this reducer from redux form into our combined reducers call.
// We must assign the key of 'form'.
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
