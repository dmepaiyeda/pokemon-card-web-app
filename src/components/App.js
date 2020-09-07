import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import HomePage from '../components/HomePage';
import { Route, Switch } from "react-router-dom";
import SearchBackup from "../components/SearchBackup"
import { withRouter } from 'react-router-dom';

/**
 * This component renders the whole application
 */
class App extends React.Component {
  
  render() {
    return(
      <div>
        <main>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/search" component={SearchBackup}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default withRouter(App);
