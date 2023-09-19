import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext.jsx";
import { FilterProvider } from "./contexts/FilterContext.jsx";
import { AuthProvider } from "./contexts/AuthContext";

import { Provider } from "react-redux";
import { Store } from "./Redux/store";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <FilterProvider>
            <Provider store={Store}>
              <App />
            </Provider>
          </FilterProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
