import React, { Component } from "react";
import $ from "jquery";
import Chart from "chart.js";

class TripDetails extends Component {
  componentDidMount() {
    $(document).ready(function() {
      var ctx = $("#chart-time");
      var myLineChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "1:00 PM",
            "2:00 PM",
            "3:00 PM",
            "4:00 PM",
            "5:00 PM",
            "6:00 PM",
            "7:00 PM",
            "8:00 PM",
            "9:00 PM",
            "10:00 PM"
          ],
          datasets: [
            {
              data: [0, 1, 5, 3, 5, 0, 2, 5, 4, 6],
              label: "Dispatch Delivered ",
              borderColor: "#458af7",
              backgroundColor: "#458af7",
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: true,
            position: "bottom",
            lineDash: 5
          },
          title: {
            display: true,
            text: "Temperature Conflict"
          }
        }
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div id="dipatch_bar" style={{ marginTop: "5%" }}>
          <div class="container-fluid dip_bar">
            <div class="d-flex justify-content-between">
              <h6> Trip Details</h6>
              <form class="form-inline" action="#">
                <button class="w3-button w3-small w3-border w3-border-blue">
                  Pre Terminate Trip
                </button>
                <button class="w3-button w3-small w3-border-blue">
                  <i class="fas fa-pencil-alt"></i>
                  Edit
                </button>
                <button class="w3-button w3-small">
                  <i class="fas fa-trash-alt"></i> Delete
                </button>

                <button class="w3-button w3-small">
                  <i class="fas fa-times"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- Dispatch bar form end --> */}

        {/* <!-- dispatch_delivery_details --> */}
        {/* <!-- Trip Car Details --> */}
        <div class="container-fluid animated slideInDown dispatch_delivery_pad w3-white ">
          <div class="row form-inline">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
              <p
                class="text-center mt-2"
                style={{ fontSize: "15px", color: "gray" }}
              >
                Temperature: <b style={{ color: "blue" }}> 2 &#176;C</b>
              </p>
            </div>
            <div class="col-sm-4">
              <p
                class="text-right p-2 mr-2"
                style={{
                  color: "green",
                  fontSize: "12px",
                  letterSpacing: "2px"
                }}
              >
                <i class="fas fa-circle">In Transit</i>
              </p>
            </div>
          </div>
          <div class="row form-inline mr-0">
            <div class="col-sm-12 ">
              <div class="progressr011 pt-0">
                <ul class="barr011">
                  <li class="float-left" style={{ textAlign: "left" }}>
                    <p class="fonter">
                      <em>Port Mumbai</em>
                      <br />
                      <span class="fonter">
                        <b>May 2019 | 03:10 PM</b>
                      </span>
                    </p>
                    <i class="far fa-dot-circle"></i>
                    <img
                      class="si1"
                      src="assets/svg/truck.svg"
                      style={{ left: "10px" }}
                    />
                  </li>
                  <li style={{ textAlign: "center" }}>
                    <p class="bfonter">
                      <em>
                        <i
                          class="fas fa-truck-moving p-2"
                          style={{
                            color: "rgb(148, 117, 77)",
                            backgroundColor: "rgb(226, 233, 240)",
                            borderRadius: "50%"
                          }}
                        ></i>
                      </em>
                      <br />
                      <span class="fonter">
                        <b>&nbsp;</b>
                      </span>
                    </p>
                    <i class="far fas-dot-circle"></i>
                    <p class="fonter">64km, 1 mins ago</p>
                  </li>

                  <li
                    class=" float-right"
                    style={{ border: "0px solid black", textAlign: "right" }}
                  >
                    <p class="fonter ">
                      <em>Pune</em>
                      <br />
                      <span class="fonter">
                        <b>May 2019 | 03:10PM</b>
                      </span>
                    </p>
                    <i class="far fa-dot-circle"></i>
                    <p class="fonter">148 km</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Trip Car Details End --> */}

        <div
          class="container-fluid animated slideInDown dispatch_delivery_pad2 w3-white"
          style={{ border: "0px solid black" }}
        >
          <div class="row mr-0 pt-3">
            <div class="col-sm-10">
              <ul style={{ listStyle: "none" }}>
                <li>
                  vehicle Number&nbsp; <b> MH 01 AB 1234</b>
                </li>
                <li>
                  Current Location
                  <b> Mumbai hwy, Mandad Atkargoan, Maharashtra 410203</b>
                </li>
              </ul>
            </div>
            <div class="col-sm-2">
              <ul
                style={{ listStyle: "none", lineHeight: "30px", color: "blue" }}
              >
                <li class="bfonter">
                  <b>
                    <i class="fas fa-file-word    "></i> Documents
                  </b>
                </li>
                <li class="bfonter">
                  <b>
                    <i class="fas fa-map-marked    "></i> Location
                  </b>
                </li>
              </ul>
            </div>
          </div>
          <div class="divider"></div>
          <nav class="nav nav-pills nav-justified dis_nav" role="tablist">
            <a
              class="nav-item nav-link active"
              id="temperature_tab"
              data-toggle="tab"
              href="#temperature"
              role="tab"
              aria-controls="temperature"
              aria-select="true"
            >
              <i class="fas fa-temperature-high"></i> Temperature
            </a>
            <a
              class="nav-item nav-link"
              id="profile-tab"
              aria-controls="profile"
              data-toggle="tab"
              role="tab"
              href="#profile"
              aria-select="false"
            >
              <i class="fas fa-map-marker-alt"></i> Location History
            </a>
            <a class="nav-item nav-link" href="#">
              <i class="fas fa-map-marked-alt"></i> Route History
            </a>
            <a class="nav-item nav-link" href="#">
              <i class="fas fa-route"></i> Travel History
            </a>
            <a class="nav-item nav-link" href="#">
              <i class="fas fa-ban"></i> Stoppage History
            </a>
            <a class="nav-item nav-link" href="#">
              <i class="fas fa-map"></i> Route
            </a>
          </nav>

          {/* <!-- Tab Contents --> */}
          <div class="tab-content" id="myTabContent">
            {/* <!-- Temperature Chart --> */}
            <div
              class="tab-pane fade show active"
              id="temperature"
              role="tabpanel"
              aria-labelledby="temperature_tab"
            >
              <div class="container-fluid mt-2 p-2 w3-white ">
                <div class="row">
                  <div class="col-sm-7">
                    <div class="border p-2">
                      <div class="card-body " style={{ height: "fill" }}>
                        <div
                          class="chartjs-size-monitor"
                          style={{
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            right: "0px",
                            bottom: "0px",
                            overflow: "hidden",
                            pointerEvents: "none",
                            visibility: "hidden",
                            zIndex: "-1"
                          }}
                        >
                          <div
                            class="chartjs-size-monitor-expand"
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              overflow: "hidden",
                              pointerEvents: "none",
                              visibility: "hidden",
                              zIndex: "-1"
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                width: "50px",
                                height: "50px",
                                left: "0",
                                top: "0"
                              }}
                            ></div>
                          </div>
                          <div
                            class="chartjs-size-monitor-shrink"
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              overflow: "hidden",
                              pointerEvents: "none",
                              visibility: "hidden",
                              zIndex: "-1"
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                left: "0",
                                top: "0"
                              }}
                            ></div>
                          </div>
                        </div>
                        <canvas
                          id="chart-time"
                          width="150"
                          height="105"
                          class=" w3-round-medium chartjs-render-monitor"
                          style={{ width: "10px", height: "200px" }}
                        ></canvas>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-5 ">
                    <div
                      class="row border m-2 p-2"
                      style={{ borderRadius: "10px" }}
                    >
                      <div class="col-sm-6 text-left">
                        <p>Temperature Range</p>
                        <p>Minimum Temperature</p>
                        <p>Maximum Temperature</p>
                        <p>Average Temperature</p>
                        <p>Total Reading</p>
                        <p>Muted Reading</p>
                        <p>Non Compliance Reading</p>
                        <p>Bad Reading</p>
                        <p>% Non Compliance</p>
                        <p>% Within Compliance</p>
                        <p>Mean Kinetic Temperature</p>
                      </div>
                      <div class="col-sm-6 text-left">
                        <p>0&deg;C to 12&deg;C</p>
                        <p>0&deg;C </p>
                        <p>12&deg;C</p>
                        <p>7&deg;C</p>
                        <p>20</p>
                        <p>0</p>
                        <p>20</p>
                        <p>0</p>
                        <p>0%</p>
                        <p>100%</p>
                        <p>10&deg;C</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Temperature chart ends -->
				  <!-- Location History --> */}
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div class="container-fluid mt-2 p-2 w3-white ">
                <div class="row m-3">
                  <div class="col-sm-12">
                    <div class="progressr012 pt-2">
                      <ul class="StepProgress">
                        <li class="StepProgress-item is-done">
                          <strong>Post a contest</strong>
                        </li>
                        <li class="StepProgress-item is-done">
                          <strong>Award an entry</strong>
                          Got more entries that you love? Buy more entries
                          anytime! Just hover on your favorite entry and click
                          the Buy button
                        </li>
                        <li class="StepProgress-item current">
                          <strong>Post a contest</strong>
                        </li>
                        <li class="StepProgress-item">
                          <strong>Handover</strong>
                        </li>
                        <li class="StepProgress-item">
                          <strong>Provide feedback</strong>
                        </li>
                      </ul>
                    </div>

                    {/* 					
                        <!-- <div class="progressr2 pt-2">
                            <ul class="barr2">
                                <li class="float-left" style="text-align: left;">                                    
                                    <i class="far fa-dot-circle"></i>
                                    <p class="fonter"><em>Dispatch Created</em><br/><span class="fonter"><b>May 2019 | 03:10
                                                PM</b></span></p>
                                </li>
                                <li style="text-align: left;">
                                    <i class="far fa-dot-circle"></i>
                                    <p class="fonter"><em>Dispatch in Transit</em><br/><span class="fonter"><b>May 2019 | 03:10
                                                PM</b></span></p>
                                </li>

                                <li class=" float-left" style="border: 0px solid black; text-align: left;">                                   
                                    <i class="far fa-dot-circle"></i>
                                     <p class="fonter"><em>Dispatch Delivered</em><br/><span class="fonter"><b>May 2019 | 03:10
                                                PM</b></span></p>
                                </li>
								 <li style="text-align: left;">
                                    <i class="far fa-dot-circle"></i>
                                    <p class="fonter"><em>Dispatch in Transit</em><br/><span class="fonter"><b>May 2019 | 03:10
                                                PM</b></span></p>
                                </li>
                            </ul>
                        </div> --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Location History ends --> */}

            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              ..213.
            </div>
          </div>
          {/* <!-- Tab Contents ends --> */}
        </div>

        <div class="container-fluid animated slideInDown dispatch_delivery_pad w3-white  justify-content-start">
          <div class="row mr-2 p-2">
            <div class="col-sm-10">
              <ul
                style={{
                  listStyle: "none",
                  lineHeight: "30px",
                  justifyContent: "space-evenly"
                }}
              >
                <li>
                  Driver Name&nbsp; <b> Prashant Rao</b>
                </li>
                <li>
                  Driver Number <b> +91 9988776655</b>
                </li>
              </ul>
            </div>
            <div class="col-sm-2">
              <ul
                style={{ listStyle: "none", lineHeight: "30px", color: "blue" }}
              >
                <li class="bfonter">
                  <b>
                    <i class="fas fa-file-word    "></i> Documents
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container-fluid animated slideInDown dispatch_delivery_pad w3-white  justify-content-start">
          <div class="row mr-2 p-2">
            <div class="col-sm-6">
              <ul
                style={{
                  listStyle: "none",
                  lineHeight: "30px",
                  justifyContent: "space-evenly"
                }}
              >
                <li>
                  Shipment No.&nbsp; <b> Prashant Rao</b>
                </li>
                <li>
                  Delivery No. <b> +91 9988776655</b>
                </li>
                <li>
                  Transporter <b> +91 9988776655</b>
                </li>
                <li>
                  Transporter LR No. <b> +91 9988776655</b>
                </li>
              </ul>
            </div>
            <div class="col-sm-6">
              <ul
                style={{
                  listStyle: "none",
                  lineHeight: "30px",
                  justifyContent: "space-between"
                }}
              >
                <li>
                  Vehicle Type &nbsp; <b>40 Feet</b>
                </li>
                <li>
                  SKU Type &nbsp; <b>Ambient</b>
                </li>
                <li>
                  SKU Details &nbsp; <b>Food</b>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container-fluid animated slideInDown dispatch_delivery_pad w3-white ">
          <div class="row form-inline m-3">
            <div class="col-sm-12 ">
              <div class="progressr012 pt-2">
                <ul class="barr012">
                  <li class="float-left" style={{ textAlign: "left" }}>
                    <i class="far fa-dot-circle"></i>
                    <p class="fonter">
                      <em>Dispatch Created</em>
                      <br />
                      <span class="fonter">
                        <b>May 2019 | 03:10 PM</b>
                      </span>
                    </p>
                  </li>
                  <li style={{ textAlign: " center" }}>
                    <i class="far fa-dot-circle"></i>
                    <p class="fonter">
                      <em>Dispatch in Transit</em>
                      <br />
                      <span class="fonter">
                        <b>May 2019 | 03:10 PM</b>
                      </span>
                    </p>
                  </li>

                  <li
                    class=" float-right"
                    style={{ border: "0px solid black", textAlign: "right" }}
                  >
                    <i class="far fa-dot-circle"></i>
                    <p class="fonter">
                      <em>Dispatch Delivered</em>
                      <br />
                      <span class="fonter">
                        <b>May 2019 | 03:10 PM</b>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- dispatch_delivery_details_end --> */}

        {/* <!-- Temperature Chart Script --> */}
      </React.Fragment>
    );
  }
}

export default TripDetails;
