import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

// We applied as middleware promise;
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// As we are using mostly React router we won't need a particular wrapper such as App for containing the whole components
// because there are many pages-components that will be called depending on situation.
ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      {/* // SWITCH: is in charge of avoiding interference between different routes. The routes have to be orderer
      properly. */
      }
      <Switch>
        <Route path="/posts/new" component={PostsNew}/>
        <Route path="/" component={PostsIndex}/>
      </Switch>
    </div>
  </BrowserRouter>
</Provider>, document.querySelector('.container'));
