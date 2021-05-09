import React from "react";
import Home from "./Home/Home"
import RepairDeskHome from "./RepairDeskHome/RepairDeskHome"
import ProtectedRoute from "../ProtectedRoute"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Routing All page will be here */
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/*Public Routes */}
            <Route path="/login" exact component={RepairDeskHome} />
            <Route path="/register" exact component={RepairDeskHome} />
            <Route path="/" exact component={RepairDeskHome} />
        {/*Public Routes End */}

        {/* Admin Routes */}
        {/* <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard"
          component={DashboardAdmin}
        />
        */}
        {/* Admin Routes End */}

        <ProtectedRoute
          exact={true}
          path="/home"
          component={Home}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
