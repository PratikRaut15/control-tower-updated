import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <!-- sidebar --> */}
        <aside
          class="sidenav"
          style={{
            width: "18%",
            background: "#2D373C",
            color: "white",
            marginTop: "0%",
            height: "150%",
            position: "fixed"
          }}
        >
          <div class="sidelogo img-thumbnail">
            {/* <!-- <img class="sideimg" src="assets/img/logo.png" alt="Logo" height="100px" width="100px"> --> */}
          </div>
          <a class="nav-link p-hover" href="index.html">
            <div class="nav p-2">
              <img src="assets/svg/dashboard.svg" width="18" />
              {/* <!-- <i class="fas fa-home" ></i> --> */}
              <span> &nbsp; &nbsp;Dashboard</span>
            </div>
          </a>
          <Link
            class="nav-link  w3-hover-text-white small inact"
            to="dispatch-delivery"
          >
            <div class="nav p-2">
              <img src="assets/svg/trip.svg" width="18" />
              {/* <!-- <i class="fas fa-home" ></i> --> */}
              <span> &nbsp; &nbsp;Trips</span>
            </div>
          </Link>

          <a class="nav-link p-hover" href="dispatches.html">
            <div class="nav p-2">
              <img src="assets/svg/d_trip.svg" width="18" />
              {/* <!-- <i class="fas fa-home" ></i> --> */}
              <span> &nbsp; &nbsp;Delivered Trips</span>
            </div>
          </a>

          <a class="nav-link  justify-content-between p-hover" href="#">
            <div
              data-toggle="collapse"
              data-target="#service"
              class="nav collapsed p-2"
            >
              <div class="row text-left">
                <div class="col-md-9 ">
                  <img src="assets/svg/master.svg" width="18" />
                  <span> &nbsp;&nbsp;Masters</span>
                </div>
                <div class="col-sm-1 ">
                  <i
                    class="fas fa-caret-down"
                    style={{
                      fontSize: "18px",
                      marginTop: "4px",
                      position: "relative",
                      left: "90px"
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </a>

          <div class="sub-meenu collapse " id="service">
            <a class="nav-link p-hover" href="checkpoint.html">
              <div class="pl-5">
                <span> &nbsp;Check Point</span>
              </div>
            </a>
            <a class="nav-link p-hover" href="route.html">
              <div class="pl-5">
                <span> &nbsp;Route</span>
              </div>
            </a>
            <a class="nav-link p-hover" href="sku.html">
              <div class="pl-5 ">
                <span> &nbsp;SKU</span>
              </div>
            </a>
            <a class="nav-link p-hover" href="user.html">
              <div class="pl-5 ">
                <span> &nbsp;User</span>
              </div>
            </a>
            <a class="nav-link p-hover" href="driver.html">
              <div class="pl-5">
                <span> &nbsp;Driver</span>
              </div>
            </a>
            <a class="nav-link p-hover" href="trip.html">
              <div class="pl-5">
                <span> &nbsp;Trip Status</span>
              </div>
            </a>
            <a class="nav-link p-hover" href="vehicle_type.html">
              <div class="pl-5">
                <span> &nbsp;Vehicle Type</span>
              </div>
            </a>
          </div>
          <div class="row">
            <div class="col-md-2 offset-md-0 fixed-bottom text-center">
              <p class="fonter">
                © 2020 All Rights Reserved. <br /> Elixia Tech Solutions PVT.
                LTD.
              </p>
            </div>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

export default Sidebar;
