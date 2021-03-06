import React from 'react';

import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavbarContainer from './navbar/navbar_container';
import FooterContainer from './navbar/footer_container';
import Splash from './session/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import BrowseContainer from './browse/browse_container';
import SearchResultsContainer from './browse/search_results_container';
import CurrentMovieContainer from './movies/current_movie_container';
import ListContainer from './list/list_container';

import MyRedirect from './browse/redirect';

const App = () => (
  <div className="overall">
    <div className="logged-header">
      <NavbarContainer />
    </div>

    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/browse/:bad" component={MyRedirect} />
      <ProtectedRoute
        path="/browse/:spinnerId/:movieId/:random"
        component={MyRedirect}
      />

      <ProtectedRoute path="/browse" component={BrowseContainer} />
      <ProtectedRoute path="/search" component={SearchResultsContainer} />
      <ProtectedRoute
        exact
        path="/watch/:movieId"
        component={CurrentMovieContainer}
      />
      <ProtectedRoute exact path="/list" component={ListContainer} />
      <Redirect to="/" />
    </Switch>

    <div className="footer">
      <div>
        Created by <a className="go-white" href="http://jondoom.com">Jon Dominguez</a>
      </div>
      <a href="https://github.com/jon-dominguez94">
        <div className="fa fa-github social" />
      </a>
      <a href="https://www.linkedin.com/in/jondominguez94/">
        <div className="fa fa-linkedin social" />
      </a>
    </div>

    {/* <div className="logged-footer">
      <FooterContainer />
    </div> */}

  </div>
);

export default App;