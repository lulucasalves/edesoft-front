import React from "react";
import ReactDOM from "react-dom/client";
import store from "store";
import reportWebVitals from "reportWebVitals";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Create, Read, Update } from "pages";

import "styles/global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
