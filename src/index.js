import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './app';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./app', () => {
    render();
  });
}
