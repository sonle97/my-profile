/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import "antd/dist/antd.css";
import * as React from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ButtonScrollOnTop from "./components/ButtonScrollOnTop";

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Profile" defaultTitle="Profile">
        <meta name="description" content="Profile" />
      </Helmet>
      <AppLayout />
      <ButtonScrollOnTop />
    </BrowserRouter>
  );
}
