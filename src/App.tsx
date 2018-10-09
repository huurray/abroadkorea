import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
// import SignIn from './components/SignIn';
import Category from './components/Category';
import Sites from './components/Sites';

//hoc
import withAuth from './hoc/Auth';
import withStyles from './hoc/Styles';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Category} />
          <Route exact path="/sites" component={Sites} />
          <Route path="/sites/:siteUrl+" component={Sites} />
          {/* <Route path="/signin" component={SignIn} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(withAuth(App));
