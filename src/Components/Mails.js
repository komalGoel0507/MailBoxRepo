import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter, Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import { List, ListItem } from "material-ui/List";
import { white, black, red600 } from "material-ui/styles/colors";
import ActionAssignment from "material-ui/svg-icons/action/assignment";
import Avatar from "material-ui/Avatar";
import ActionInfo from "material-ui/svg-icons/action/info";

import PostData from "../inbox1.json";

export class mails extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="MailBox" style={{ backgroundColor: "#E53935" }} />
            <div>
              {PostData.map((postDetail, index) => {
                return (
                  <div className="DesignInbox">
                    <List>
                      <ListItem
                        leftAvatar={
                          <Avatar
                            icon={<ActionAssignment />}
                            backgroundColor={red600}
                          />
                        }
                        primaryText={
                          <span style={{ color: black }}>
                            {<ActionInfo />}
                            <RaisedButton
                              label="Delete"
                              onClick={() =>
                                this.props.history.push("/deleted")
                              }
                              fullWidth={true}
                              Primary={true}
                              styles={styles.button}
                              insetChildren={true}
                            />
                            <br />
                            <RaisedButton
                              label="Spam"
                              onClick={() => this.props.history.push("/spam")}
                              fullWidth={true}
                              Primary={true}
                              styles={styles.button}
                              insetChildren={true}
                            />
                            <div className="DesignMail">
                              {<ContentInbox />}

                              <h1>From: {postDetail.from}</h1>
                              <h2>To: {postDetail.to}</h2>
                              <h3>Subject: {postDetail.subject}</h3>
                              <p>
                                <h1>Description:</h1>
                                {postDetail.description}
                              </p>
                              <p>{postDetail.logo}</p>
                            </div>
                          </span>
                        }
                        insetChildren={true}
                      />
                    </List>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default mails;
