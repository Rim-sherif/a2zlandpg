import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'jquery/dist/jquery.min.js';


import 'twbs-pagination/jquery.twbsPagination.min.js';
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "react-query";

let queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

reportWebVitals();
