import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Avatar from "material-ui/Avatar";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";
import { white, black, red600 } from "material-ui/styles/colors";
import ActionAssignment from "material-ui/svg-icons/action/assignment";
import AppBar from "material-ui/AppBar";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import PostData from "../inbox1.json";

export class Inbox extends Component {
  render() {
    console.log("test ", this.props);
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="MailBox" style={{ backgroundColor: "#E53935" }} />
          <Subheader styles="font-weight: bold">Recent Mails</Subheader>
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
                          <h1> From : {postDetail.from}</h1>
                          <RaisedButton
                            fullWidth={true}
                            onClick={() => this.props.history.push("/mail")}
                            label="Open "
                            Primary={true}
                            styles={styles.button}
                          />
                        </span>
                      }
                    />
                  </List>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 1500
  }
};
export default Inbox;
