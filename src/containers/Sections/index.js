import React, { useEffect, useState } from 'react'

import Box from '../../components/Box'
import { responsive } from '../../components/ThemeProvider/theme'

import GSG from './GSG/Loadable'
import Feature from './Feature/Loadable'
import SustainEx from './SustainEx/Loadable'

const secs = [
  { name: '永續投資重要性', Comp: GSG },
  { name: '多元佈局', Comp: Feature },
  { name: '平衡風險', Comp: SustainEx },
]

const Sections = ({ onLoad }) => {
  const [loaded, setLoaded] = useState(0)
  useEffect(() => {
    if (loaded >= secs.length) {
      onLoad()
    }
  }, [loaded])
  return (
    <Box id="fund-head" pt={responsive(0, '2em')}>
      {secs.map(({ Comp, name }, i) => loaded >= i && (
        <Comp key={name} onLoad={() => setLoaded(l => l + 1)} />
      ))}
    </Box>
  )
}

export default Sections
