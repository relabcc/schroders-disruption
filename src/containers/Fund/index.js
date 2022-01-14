import React, { useEffect, useState } from 'react'

import Container from '../../components/Container'
import Box from '../../components/Box'
import { responsive } from '../../components/ThemeProvider/theme'

// import Flex from '../../components/Flex'

import FundTabs from './Tabs'

const Fund = ({ onLoad }) => {
  const [activeTab, setActiveTab] = useState(0)
  useEffect(() => onLoad(), [])

  return (
    <Container pt={responsive('2.86em', '7.143em')}>
      <Box.Title>基金資料</Box.Title>
      <FundTabs selectedIndex={activeTab} onSelect={setActiveTab} />
    </Container>
  )
}

export default Fund
