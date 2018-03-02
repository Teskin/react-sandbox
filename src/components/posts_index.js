import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {
  // The component will be rendered only once the component has loaded all the data necessary (here in this function, once). In
  // this particular case, we are going to fatch data from the reducer which will call an action.
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    // We are using Lodash .map because the props we are using is actually an object instead a proper list as this content is coming from the reducers
    // and a global state, otherwise it wouldn't work at all!
    return _.map(this.props.posts, post => {
      return (<li className="list-group-item" key={post.id}>
        {post.title}
      </li>);
    });
  }

  render() {
    return (<div>
      <div className="text-xs-right">
        {/* // Link behaves like a normal anchor tag. */}
        <Link className="btn btn-primary" to="/posts/new">
          Add a Post
        </Link>
      </div>
      <h3>Posts</h3>
      <ul className="list-group">
        {this.renderPosts()}
      </ul>
    </div>);
  }
}

// Whenever someone wants to consume from the application level state we need to define:
function mapStateToProps(state) {
  return {posts: state.posts};
}

// The first function may be null as it would be mapstateProps which we are not going to use.
// Furthermore the second parameter is the actioncreator itself within an object with has been compressed as you can see below:
// {fetchPosts: fetchPosts}
// Consider that the target is always the same which is having the return of the action available as prop in the component.
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
