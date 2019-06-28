import React, { Component } from 'react';
import ThemedButton from './components/ThemedButton';
import { ThemeContext, themes } from './context/theme-context';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemedButton>Default Theme</ThemedButton>
        </section>
      </div>
    );
  }
}

// Accessing the context usinf function component
export function AppFunction() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <section>
          <button type="button" onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
            Toggle Theme
          </button>
        </section>
      )}
    </ThemeContext.Consumer>
  );
}
