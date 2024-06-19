import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store/index.ts";
import App from "./routes/App";

import "@/css/global/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

/**
 * Author: Awaluddin .
 * Github: https://github.com/Awaluddin0001
 * Date: 2024-06-10
 * Copyright © 2024 Awaluddin. All rights reserved.
 */
