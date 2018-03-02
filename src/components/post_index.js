import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

class PostIndex extends Component {
  // The component will be rendered only once the component has loaded all the data necessary (here in this function, once). In
  // this particular case, we are going to fatch data from the reducer which will call an action.
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    _.map(this.props.posts, post => {
      return (<li className="list-group-item" key={post.id}>
        {post.title}
      </li>);
    });
  }

  render() {
    return (<div>
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

// The first function is null as it would be mapstateProps which we are not going to use.
// Furthermore the second parameter is the actioncreator itself within an object with has been compressed as you can see below:
// {fetchPosts: fetchPosts}
// Consider that the target is always the same which is having the return of the action available as prop in the component.
export default connect(mapStateToProps, {fetchPosts})(PostIndex);
