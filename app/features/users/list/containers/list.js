import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as duck from '../duck';
import List from '../components/list';

@connect(
  state => state.usersListReducer,
  dispatch => ({actions: bindActionCreators(duck, dispatch)})
)
class UsersListContainer extends React.Component {

  render() {
    return (
      <List />
    );
  }
  
}

export default UsersListContainer;