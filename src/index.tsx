import * as React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.addEventListener('DOMContentLoaded', () => {
  hydrate(
    <App />,
    document.getElementById('root')
  );
});
registerServiceWorker();
