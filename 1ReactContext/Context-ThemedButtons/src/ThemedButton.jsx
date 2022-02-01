import React from "react";
import { ThemeContext } from "themes-context";

class ThemedButton extends React.Component {
  render() {
    this.context;
    return <button {...this.props} class="btn" />;
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
