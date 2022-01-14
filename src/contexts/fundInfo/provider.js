import React, { useState } from 'react';

import Context from './context'

const Provider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <Context.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </Context.Provider>
  )
}

export default Provider;
