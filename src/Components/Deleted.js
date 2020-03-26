import React, { Component } from "react";
import Subheader from "material-ui/Subheader";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import ActionInfo from "material-ui/svg-icons/action/info";
import PostData from "../inbox1.json";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";

export class Deleted extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="MailBox" style={{ backgroundColor: "#E53935" }} />
          <Subheader>All deleted Mails are here</Subheader>
          <div className="DesignDelete">
            {PostData.map((postDetail, index) => {
              return (
                <div>
                  <p>{<ActionInfo />} you have deleted this mail</p>
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
export default Deleted;
