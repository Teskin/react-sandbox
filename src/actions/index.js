import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=teskin123';

export function fetchPosts() {
  // same as 'http://reduxblog.herokuapp.com/api' + '/posts'.
const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  // Once this action arrives to the reducers, passing through middleware Redux-promise
  // which will resolve automatically the request, it will contain the actual array of posts.
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
