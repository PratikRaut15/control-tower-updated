import React, { Component } from "react";
import { Link } from "react-router-dom";

export class DispatchDelivery extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="dispatch_bar" style={{ overflow: "hidden" }}>
          <div class="container-fluid dip_bar">
            <div class="row">
              <div class="col-sm-12">
                <div class="d-flex justify-content-between">
                  <strong class="mt-2"> Trips</strong>
                  <form class="form-inline" action="#">
                    <div class="input-group search_bar">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text w3-white w3-round w3-border w3-border-light-grey"
                          style={{ borderRadius: "20px 0px 0px 20px" }}
                          id="basic-addon1"
                        >
                          <i class="fas fa-search"></i>
                        </span>
                      </div>
                      <input
                        style={{
                          textAlign: "start",
                          height: "30px",
                          borderRadius: "0px 20px 20px 0px"
                        }}
                        type="text"
                        class="form-control w3-border w3-border-light-grey"
                        placeholder="search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <button class="w3-button w3-small w3-border w3-hover-border-black w3-hover-white w3-border-light-grey ml-1 w3-round">
                      <i class="fas fa-pencil-alt"></i>
                      Edit
                    </button>
                    <button class="w3-button w3-small w3-border w3-hover-border-black w3-hover-white w3-border-light-grey ml-1 w3-round">
                      <i class="fas fa-trash-alt"></i> Delete
                    </button>
                    <button class="w3-button w3-small w3-border w3-hover-border-black w3-hover-white w3-border-light-grey ml-1 w3-round">
                      {/* <!-- <object type="image/svg+xml" data="assets/svg/import.svg" width="12px;" class="icons icon-import">
                    import
                  </object> --> */}
                      <img
                        src="assets/svg/import.svg"
                        style={{ width: "12px" }}
                      />
                      Import
                    </button>
                    <button class="w3-button w3-small w3-border w3-hover-border-black w3-hover-white w3-border-light-grey ml-1 w3-round">
                      <img
                        src="assets/svg/export.svg"
                        style={{ width: "12px" }}
                      />
                      Export
                    </button>
                    <Link
                      to="createTrip"
                      class="w3-button w3-hover-border-black w3-hover-white w3-border-light-grey w3-small ml-1 w3-border w3-round"
                    >
                      <i class="fas fa-plus"></i> New
                    </Link>
                    <button class="w3-button w3-small ml-1 w3-hover-white w3-round">
                      <i class="fas fa-times"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid animated slideInDown pad w3-white">
          <Link to="trip-details">
            <div class="row form-inline">
              <div class="col-sm-2 col-md-2 padder text-center">
                <p>
                  <b class="fonter">Vehicle Number</b> <br />
                  <b class="bfonter">MH 01 AB 1234</b>
                </p>
              </div>
              <div class="col-sm-12 col-md-7 mt-5 pl-2">
                <div class="w3-light-grey loding_bar">
                  <div class="start">
                    <b>Port Mumbai</b> <br />
                    <span>16 May 2019 | 10:08 PM</span>
                  </div>
                  <div
                    class="w3-green loder "
                    style={{ height: "3px", width: "25%" }}
                  ></div>
                  <div class="status_truck">
                    <img src="assets/svg/truck.svg" alt="" width="18px" />
                  </div>
                  <div class="truck">
                    <img src="assets/svg/car.svg" alt="" width="18px" />
                  </div>
                  <div class="end">
                    <b>Pune</b> <br />
                    <span>16 May 2019 | 1:08 AM</span>
                  </div>
                  <div class="distance_km">
                    <span>148 km</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 col-md-3 form-inline">
                <div class="m-2 pl-4 pr-4 status round">
                  <div class="temp">
                    <ul class="list-group tempnum">
                      <li class=" align-items-center">2&#176;C</li>
                      <li class=" align-items-center fonter">
                        <b>Temperature</b>
                      </li>
                      <li class=" align-items-center fonter">
                        <b>&#176;C to 12&#176;C</b>
                      </li>
                    </ul>
                    {/* <!-- <p><b class="tempnum"></b><b class="fonter">Temperature <br>&#176C to 12&#176C</b></p> --> */}
                  </div>
                </div>
                <p class="status text-right" style={{ fontSize: "11px" }}>
                  <i class="fas fa-circle"></i> In Transit
                </p>
              </div>
            </div>
          </Link>
          <div class="hr"></div>
          <div class="row justify-content-md-start">
            <div class="col-sm-12">
              <div class="row ">
                <div class="col-sm-3 d-flex ml-3">
                  <p
                    class="fonter p-1 mr-1 w3-border w3-round"
                    style={{ cursor: "pointer" }}
                  >
                    <b>
                      &nbsp; Trip Log No.:
                      <b class="w3-text-black">
                        10000235458 <i class="fas fa-share-alt"></i> &nbsp;
                      </b>
                    </b>
                  </p>
                  <p
                    class="fonter p-1 pr-1 w3-border"
                    data-toggle="modal"
                    data-target="#skuDetails"
                    style={{
                      border: "0px dashed gray",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    <b class="w3-text-black">&nbsp; SKU Details &nbsp; </b>
                  </p>
                </div>
                <div class="col-sm-8 mt-1">
                  <marquee>
                    <p class="fonter">
                      Current Location:
                      <b class="w3-text-black">
                        mumbai Hwy, Mandad Atkargaon,Maharashtra 410203
                      </b>
                      &nbsp; &nbsp; &nbsp; Driver Name:
                      <b class="w3-text-black">Prashant Rao</b>&nbsp; &nbsp;
                      &nbsp; Driver Number:
                      <b class="w3-text-black">+91 78945610</b>
                    </p>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid animated slideInDown pad w3-white">
          <Link to="trip-details">
            <div class="row form-inline">
              <div class="col-sm-2 col-md-2 padder text-center">
                <p>
                  <b class="fonter">Vehicle Number</b> <br />
                  <b class="bfonter">MH 01 AB 1234</b>
                </p>
              </div>
              <div class="col-sm-12 col-md-7 mt-5 pl-2">
                <div class="w3-light-grey loding_bar">
                  <div class="start">
                    <b>Port Mumbai</b> <br />
                    <span>16 May 2019 | 10:08 PM</span>
                  </div>
                  <div
                    class="w3-green loder "
                    style={{ height: "3px", width: "25%" }}
                  ></div>
                  <div class="status_truck">
                    <img src="assets/svg/truck.svg" alt="" width="18px" />
                  </div>
                  <div class="truck">
                    <img src="assets/svg/car.svg" alt="" width="18px" />
                  </div>
                  <div class="end">
                    <b>Pune</b> <br />
                    <span>16 May 2019 | 1:08 AM</span>
                  </div>
                  <div class="distance_km">
                    <span>148 km</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 col-md-3 form-inline">
                <div class="m-2 pl-4 pr-4 status round">
                  <div class="temp">
                    <ul class="list-group tempnum">
                      <li class=" align-items-center">2&#176;C</li>
                      <li class=" align-items-center fonter">
                        <b>Temperature</b>
                      </li>
                      <li class=" align-items-center fonter">
                        <b>&#176;C to 12&#176;C</b>
                      </li>
                    </ul>
                    {/* <!-- <p><b class="tempnum"></b><b class="fonter">Temperature <br>&#176C to 12&#176C</b></p> --> */}
                  </div>
                </div>
                <p class="status text-right" style={{ fontSize: "12px" }}>
                  <i class="fas fa-circle"></i> In Transit
                </p>
              </div>
            </div>
          </Link>
          <div class="hr"></div>
          <div class="row justify-content-md-start">
            <div class="col-sm-12">
              <div class="row ">
                <div class="col-sm-3 d-flex ml-3">
                  <p
                    class="fonter p-1 mr-1 w3-border w3-round"
                    style={{ cursor: "pointer" }}
                  >
                    <b>
                      &nbsp; Trip Log No.:
                      <b class="w3-text-black">
                        10000235458 <i class="fas fa-share-alt"></i> &nbsp;
                      </b>
                    </b>
                  </p>
                  <p
                    class="fonter p-1 pr-1 w3-border"
                    data-toggle="modal"
                    data-target="#skuDetails"
                    style={{
                      border: "0px dashed gray",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    <b class="w3-text-black">&nbsp; SKU Details &nbsp; </b>
                  </p>
                </div>
                <div class="col-sm-8 mt-1">
                  <marquee>
                    <p class="fonter">
                      Current Location:
                      <b class="w3-text-black">
                        mumbai Hwy, Mandad Atkargaon,Maharashtra 410203
                      </b>
                      &nbsp; &nbsp; &nbsp; Driver Name:
                      <b class="w3-text-black">Prashant Rao</b>&nbsp; &nbsp;
                      &nbsp; Driver Number:
                      <b class="w3-text-black">+91 78945610</b>
                    </p>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- dispatch_delivery_end -->
      			<!-- block body end -->



            <!-- block body -->
                  <!-- dispatch_delivery  --> */}

        <div class="container-fluid animated slideInDown pad w3-white">
          <Link to="trip-details">
            <div class="row form-inline">
              <div class="col-sm-2 col-md-2 padder text-center">
                <p>
                  <b class="fonter">Vehicle Number</b> <br />
                  <b class="bfonter">MH 01 AB 1234</b>
                </p>
              </div>
              <div class="col-sm-12 col-md-7 mt-5 pl-2">
                <div class="w3-light-grey loding_bar">
                  <div class="start">
                    <b>Port Mumbai</b> <br />
                    <span>16 May 2019 | 10:08 PM</span>
                  </div>
                  <div
                    class="w3-green loder "
                    style={{ height: "3px", width: "25%" }}
                  ></div>
                  <div class="status_truck">
                    <img src="assets/svg/truck.svg" alt="" width="18px" />
                  </div>
                  <div class="truck">
                    <img src="assets/svg/car.svg" alt="" width="18px" />
                  </div>
                  <div class="end">
                    <b>Pune</b> <br />
                    <span>16 May 2019 | 1:08 AM</span>
                  </div>
                  <div class="distance_km">
                    <span>148 km</span>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 col-md-3 form-inline">
                <div class="m-2 pl-4 pr-4 status round">
                  <div class="temp">
                    <ul class="list-group tempnum">
                      <li class=" align-items-center">2&#176;C</li>
                      <li class=" align-items-center fonter">
                        <b>Temperature</b>
                      </li>
                      <li class=" align-items-center fonter">
                        <b>&#176;C to 12&#176;C</b>
                      </li>
                    </ul>
                    {/* <!-- <p><b class="tempnum"></b><b class="fonter">Temperature <br>&#176C to 12&#176C</b></p> --> */}
                  </div>
                </div>
                <p class="status text-right" style={{ fontSize: "12px" }}>
                  <i class="fas fa-circle"></i> In Transit
                </p>
              </div>
            </div>
          </Link>
          <div class="hr"></div>
          <div class="row justify-content-md-start">
            <div class="col-sm-12">
              <div class="row ">
                <div class="col-sm-3 d-flex ml-3">
                  <p
                    class="fonter p-1 mr-1 w3-border w3-round"
                    style={{ cursor: "pointer" }}
                  >
                    <b>
                      &nbsp; Trip Log No.:
                      <b class="w3-text-black">
                        10000235458 <i class="fas fa-share-alt"></i> &nbsp;
                      </b>
                    </b>
                  </p>
                  <p
                    class="fonter p-1 pr-1 w3-border"
                    data-toggle="modal"
                    data-target="#skuDetails"
                    style={{
                      border: "0px dashed gray",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    <b class="w3-text-black">&nbsp; SKU Details &nbsp; </b>
                  </p>
                </div>
                <div class="col-sm-8 mt-1">
                  <marquee>
                    <p class="fonter">
                      Current Location:
                      <b class="w3-text-black">
                        mumbai Hwy, Mandad Atkargaon,Maharashtra 410203
                      </b>
                      &nbsp; &nbsp; &nbsp; Driver Name:
                      <b class="w3-text-black">Prashant Rao</b>&nbsp; &nbsp;
                      &nbsp; Driver Number:
                      <b class="w3-text-black">+91 78945610</b>
                    </p>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- dispatch_delivery_end -->
      			<!-- block body end -->



      			<!-- Modal Starts -->

			<!-- Button trigger modal --> */}

        {/* Dynamic Row content */}
      </React.Fragment>
    );
  }
}

export default DispatchDelivery;
