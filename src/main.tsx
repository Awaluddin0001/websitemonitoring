import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "@/store/index.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/router.tsx";

import "@/css/global/index.css";
import { checkTokenExpiration } from "./utils/auth";

checkTokenExpiration();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

/**
 * Author: Awaluddin .
 * Github: https://github.com/Awaluddin0001
 * Date: 2024-06-10
 * Copyright © 2024 Awaluddin. All rights reserved.
 */
