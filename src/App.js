import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from './configs/routes';
import store from './configs/store';

class App extends Component {
  render() {
    return <Provider store={store}>
      <Root />
    </Provider>;
  }
}

export default App;