import React, { Component, Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Deleted from "./Components/Deleted";
import "./App.css";
import Run from "./Components/Run";
import Inbox from "./Components/Inbox";
import Spam from "./Components/Spam";
import Mails from "./Components/Mails";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <div className="App">
              <Route exact path="/" render={props => <Run {...props} />} />
              <Route path="/inbox" render={props => <Inbox {...props} />} />
              <Route path="/deleted" render={props => <Deleted {...props} />} />
              <Route path="/spam" render={props => <Spam {...props} />} />
              <Route path="/mail" render={props => <Mails {...props} />} />
            </div>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
