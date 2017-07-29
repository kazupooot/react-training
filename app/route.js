import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from './features/main/components/main';
import UsersList from './features/users/list/components/list';

class AppRoute extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={UsersList} />
          <Route path="users" component={UsersList} />
        </Route>
      </Router>
    );
  }

}

export default AppRoute;
