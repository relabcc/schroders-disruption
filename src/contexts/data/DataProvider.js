import React from "react";
import { SWRConfig } from "swr";

// const BASE_URL = 'https://us-central1-re-drive-75970.cloudfunctions.net/app/schrodersGSG'

// prices/:name
// dividends/:name
// allocation

const DataProvider = ({ children }) => (
  <SWRConfig
    value={{
      fetcher: (resource, init) =>
        fetch(resource, init).then((res) => res.json()),
    }}
  >
    {children}
  </SWRConfig>
);

export default DataProvider;
