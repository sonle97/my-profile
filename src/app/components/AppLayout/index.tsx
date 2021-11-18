import React from "react";
import { Switch, Route } from "react-router-dom";
import { PATH } from "../../../utils/url.const";
import Home from "../../pages/Home";
import NotFoundPage from "../../pages/NotFoundPage";

const AppLayout: React.FC<any> = () => {
  return (
    <Switch>
      <Route exact path={PATH.Home} component={Home} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default AppLayout;
