import React, { Component } from 'react';

import { ThemeContext } from '../context/theme-context';

class ThemedButton extends Component {
  static contextType = ThemeContext;

  render() {
    const { props } = this;
    const { theme } = this.context;
    return <button type="button" {...props} style={{ backgroundColor: theme.background }} />;
  }
}

export default ThemedButton;
