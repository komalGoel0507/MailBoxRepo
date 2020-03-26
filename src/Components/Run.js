import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter, Link } from "react-router-dom";

import RaisedButton from "material-ui/RaisedButton";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionInfo from "material-ui/svg-icons/action/info";

import AppBar from "material-ui/AppBar";

export class Run extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <React.Fragment>
            <div className="FirstPage_desgin">
              <AppBar title="MailBox" style={{ backgroundColor: "#E53935" }} />
              <br />
              {<ContentInbox />}
              <RaisedButton
                fullWidth={true}
                label="Inbox"
                styles={styles.button}
                onClick={() => this.props.history.push("/inbox")}
                Primary={true}
              />

              {<ActionInfo />}
              <RaisedButton
                fullWidth={true}
                label="Deleted"
                styles={styles.button}
                onClick={() => this.props.history.push("/deleted")}
                Primary={true}
              />
              <br />
              {<ActionInfo />}
              <RaisedButton
                label="Full width"
                fullWidth={true}
                label="Spam"
                Primary={true}
                styles={styles.button}
              />
              <hr />
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
const styles = {
  button: {
    margin: 1500
  }
};

export default Run;
