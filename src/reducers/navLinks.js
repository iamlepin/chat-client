import * as types from '../actions/actionTypes';

const initialState = [
  {
    title: 'Home',
    path: '/',
  },
  // {
  //   title: 'About',
  //   path: '/about',
  // },
  {
    title: 'Movies',
    path: '/movies',
  },
  {
    title: 'Watch list',
    path: '/watch-list',
  },
];

const navLinks = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default navLinks;
