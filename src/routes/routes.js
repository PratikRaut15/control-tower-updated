import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../views/layout/layout";
import Home from "../components/Home/home";
import Dispatch from "../components/Dispatch/dispatch";
import TripDetails from "../components/Trips/tripDetails";
import Trips from "../components/Trips/trips";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Switch>
            {/* <Route path="/getCheckpointMaster" exact component={Masters} />
            <Route path="/getRoutesMaster" exact componenpt={Masters} />
            <Route path="/getSkuMaster" exact component={Masters} />
            <Route path="/getUserMaster" exact component={Masters} />
            <Route path="/getDriverMaster" exact component={Masters} />
            <Route path="/getTripStatusMaster" exact component={Masters} />
            <Route path="/getVehicleTypeMaster" exact component={Masters} />
            <Route path="/getShipmentMaster" exact component={Masters} />
            <Route path="/getTransporterMaster" exact component={Masters} />
            <Route path="/getDelivery" exact component={Masters} />
            <Route path="/createTrip" exact component={Trip} />
            <Route
              path="/updateCheckPointMaster/:id"
              exact
              component={MastersCrud}
            />

            <Route path="/showDispatches" exact component={Dispatch} />

            <Route path="/dispatches" exact component={Dispatches} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/createUsers" exact component={User} />
            <Route
              path="/dispatchDetails/:id"
              exact
              component={dispatchDetail}
            />
            <Route path="/uploadExcel" exact component={uploadExcel} /> */}

            <Route path="/" exact component={Home} />
            <Route path="/dispatch-delivery" exact component={Dispatch} />
            <Route path="/trip-details" exact component={TripDetails} />
            <Route path="/createTrip" exact component={Trips} />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Routes;
