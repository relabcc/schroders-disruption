import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "proxy-polyfill";
import "abortcontroller-polyfill";

import React from "react";
import find from "lodash/find";
import ReactDOM from "react-dom";

import ThemeProvider from "./components/ThemeProvider";

import DataProvider from "./contexts/data/DataProvider";
import App from "./App";

const getParentContainer = (child) => {
  let parentCotainer = child;
  while ((parentCotainer = parentCotainer.parentNode)) {
    if (
      parentCotainer.classList.contains("jumbotron") &&
      parentCotainer.classList.contains("bg")
    ) {
      return parentCotainer;
    }
  }
};

const getContainer = () => {
  const target = document.getElementById("gd2021-tw-root");
  const video = document.querySelector(".flexible-media video");
  if (video) {
    video.autoplay = true;
    video.muted = true;
    video.setAttribute("playsinline", "playsinline");

    const parentCotainer = getParentContainer(video);
    if (parentCotainer) {
      parentCotainer.style.backgroundSize = "auto 100%";
      parentCotainer.style.backgroundPosition = "center";
    }
    setTimeout(() => {
      video.play();
    }, 2000);
  }
  const found = find(document.querySelectorAll(".jumbotron"), (ele) =>
    ele.contains(target)
  );
  if (found?.classList.contains("panel-white")) {
    found.classList.remove("panel-white");
  }
  const container = found || target;
  container.style.padding = "0";
  return container;
};

const init = () => {
  const container = getContainer();
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ThemeProvider>
    </React.StrictMode>,
    container
  );
};

// setTimeout(init)
init();
