import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluids">
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-white w3-card">
            <span>
              <i class="togbutton fas fa-bars"></i>
            </span>
            <a class="icon_tracker" href="#">
              <img src="assets/svg/scct.svg" width="25px" />
              <strong style={{ color: "#2C54A9" }}>
                &nbsp; Dispatch Tracker
              </strong>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navigation"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  {/* <!-- <i style="color: rgb(146, 206, 56);" class="nav-link material-icons s">android</i> --> */}
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link "
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <img class="mt-3" src="assets/svg/tool.svg" width="15px" />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right griddrop"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <div class="row">
                      <div class="col-sm-12">
                        <p
                          class="text-center small"
                          style={{ padding: "10px" }}
                        >
                          <b>Pre Transit</b>
                        </p>
                      </div>
                    </div>
                    <div class="row text-center">
                      <div class="col-sm-4">
                        <a class="small" href="#">
                          <img
                            src="assets/svg/dispatch_p.svg"
                            width="35"
                            alt=""
                          />
                          <p class="small">
                            Dispatch <br /> Planning
                          </p>
                        </a>
                      </div>
                      <div class="col-sm-4">
                        <a class=" small" href="#">
                          <img src="assets/svg/opt_eng.svg" width="35" alt="" />
                          <p class="small">
                            Optimization <br /> Engine
                          </p>
                        </a>
                      </div>
                      <div class="col-sm-4">
                        <a class=" small" href="#">
                          <img
                            src="assets/svg/tasnsp_allo.svg"
                            width="35"
                            alt=""
                          />
                          <p class="small">
                            Transporter <br /> Allocation
                          </p>
                        </a>
                      </div>
                    </div>
                    <div class="divider"></div>
                    <div class="row">
                      <div class="col-sm-12">
                        <p
                          class="text-center small font-weight-bolder"
                          style={{ padding: "10px" }}
                        >
                          In Transit
                        </p>
                      </div>
                    </div>
                    <div class="row  text-center">
                      <div class="col-sm-5">
                        <a class=" small" href="#">
                          <img
                            src="assets/svg/detention.svg"
                            width="35"
                            alt=""
                          />
                          <p class="small">Detention</p>
                        </a>
                      </div>
                      <div class="col-sm-7  text-center">
                        <a class=" small" href="#">
                          <img src="assets/svg/scct.svg" width="35" alt="" />
                          <p class="small">Dispatch Tracker</p>
                        </a>
                      </div>
                    </div>
                    <div class="divider"></div>
                    <div class="row">
                      <div class="col-sm-12">
                        <p
                          class="text-center small font-weight-bolder"
                          style={{ padding: "10px" }}
                        >
                          Post Transit
                        </p>
                      </div>
                    </div>
                    <div class="row small text-center">
                      <div class="col-sm-4 ">
                        <a class="" href="#">
                          <img src="assets/svg/pod.svg" width="35" alt="" />
                          <p class="small">POD</p>
                        </a>
                      </div>
                      <div class="col-sm-4">
                        <a class="" href="#">
                          <img
                            src="assets/svg/vendor_pay.svg"
                            width="35"
                            alt=""
                          />
                          <p class="small">
                            Vendor <br /> Payable
                          </p>
                        </a>
                      </div>
                      <div class="col-sm-4">
                        <a class="" href="#">
                          <img src="assets/svg/gold.svg" width="35" alt="" />
                          <p class="small">Gold</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="no-icon small">Welcome Elixir</span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right logdrop"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                    <div class="divider"></div>
                    <a class="dropdown-item" href="#">
                      Log out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
