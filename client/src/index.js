import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Auth0ProviderWithHistory } from "./auth/Auth0ProviderWithHistory";




ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory
     domain="dev-8a2dkllk1a5kywvs.us.auth0.com"
     clientId="5t4DumpdQbXOHHn90VVcvmk0m1NLDCSA"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);
