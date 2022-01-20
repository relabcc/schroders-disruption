import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'proxy-polyfill'
import 'abortcontroller-polyfill'
import smoothscroll from 'smoothscroll-polyfill';

import React from 'react';
import find from 'lodash/find'
import { render } from 'react-snapshot';

import ThemeProvider from './components/ThemeProvider'

// import MediaProvider from './contexts/mediaQuery/MediaProvider'
import DataProvider from './contexts/data/DataProvider'
import App from './App';
// import reportWebVitals from './reportWebVitals';

smoothscroll.polyfill();

window.injectCSS = cssLink => {
  const tag = document.createElement('link')
  tag.href = cssLink
  tag.rel = 'stylesheet'
  document.head.appendChild(tag)
}

const getContainer = () => {
  const target = document.getElementById('gd2021-tw-root');
  // window.__video = target.querySelector('[data-bynder-widget]')
  window.__btnBackToTop = target.querySelector('#backToTop')
  // window.__tabButtons = Array.from(target.querySelectorAll('.btn-carousel'))
  const found = find(document.querySelectorAll('.jumbotron'), (ele) => ele.contains(target));
  if (found?.classList.contains('panel-white')) {
    found.classList.remove('panel-white')
  }
  const container = found || target;
  container.style.padding = '0';
  return container;
};

const init = () => {
  const container = getContainer()
  render(
    <React.StrictMode>
      <ThemeProvider>
        {/* <MediaProvider> */}
        <DataProvider>
          <App />
        </DataProvider>
        {/* </MediaProvider> */}
      </ThemeProvider>
    </React.StrictMode>
    , container);
}

// setTimeout(init)
init()

// reportWebVitals(console.log);
