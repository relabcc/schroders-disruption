import React, { useEffect } from 'react';

import HomePage from './containers/HomePage'

function App() {
  useEffect(() => {
    document.body.append(window.__btnBackToTop)
    window.__tabButtons.forEach(ele => document.body.append(ele))
  }, [])
  return (
    <HomePage />
  );
}

export default App;
