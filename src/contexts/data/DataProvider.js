import React from 'react'
import { SWRConfig } from 'swr';

const BASE_URL = 'https://us-central1-re-drive-75970.cloudfunctions.net/app/schrodersGSG'

// prices/:name
// dividends/:name
// allocation

export default ({ children }) => (
  <SWRConfig
    value={{
      fetcher: (resource, init) => fetch(BASE_URL + resource, init).then(res => res.json())
    }}
  >
    {children}
  </SWRConfig>
)
