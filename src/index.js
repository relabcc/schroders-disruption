import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "proxy-polyfill";
import "abortcontroller-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import ThemeProvider from "./components/ThemeProvider";

import DataProvider from "./contexts/data/DataProvider";
import App from "./App";

const mount = () => {
  setTimeout(() => {
    document.querySelectorAll(".gd2021-tw-root").forEach((el, index) => {
      // if (index > 3) return;
      ReactDOM.render(
        <ThemeProvider>
          <DataProvider>
            <App section={1 + index} />
          </DataProvider>
        </ThemeProvider>,
        el
      );
    });
  });
};

if (process.env.NODE_ENV === "development") {
  setTimeout(() => {
    mount();
  }, 1000);
} else {
  mount();
}
