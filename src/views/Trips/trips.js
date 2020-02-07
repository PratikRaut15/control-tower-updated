import React, { Component } from "react";
import $ from "jquery";

export class Trips extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $("#newDriver").click(function() {
        var output = `<div class="container-fluid  pad w3-white">
				<div class="container-fluid p-4" style="margin-right: 0; border: 0px solid black;">
					<div class="row justify-content-between">
						<div class="col-md-6">
							<p class="textblue"><b>Driver Details</b></p>
						</div>
						<div class="col-md-6" style="text-align:right;">
							<button type="button" id="newDriver" class="w3-button w3-small w3-blue"><i class="fas fa-trash"></i> Delete Driver</button>
						</div>
					</div>
					<div class="row justify-content-between">
						<div class="col-md-2" >
							<p class="mt-2">Driver Number</p>
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control carinput" id="inlineFormInputGroupDriverNo" placeholder="Enter Driver Number">
						</div>
						<div class="col-md-2" >
							<p class="mt-2">Driver Mobile Number</p>
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control carinput" id="inlineFormInputGroupMobileNo" placeholder="Enter Mobile Number">
						</div>
					</div>
				</div>
			</div>`;
        $("#createDriver").append(output);
      });
    });

    $(document).ready(function() {
      $("#newDriver2").click(function() {
        var output = `<div class="container-fluid pad w3-white">
            <div class="container-fluid p-4">
                <div class="row justify-content-between">
                    <div class="col-md-6">
                        <p class="textblue"><b>Driver Details</b></p>
                    </div>
                    <div class="col-md-6" style="text-align:right;">
                        <button id="#" type="button" class="w3-button w3-small w3-blue"><i class="fas fa-plus"></i> Delete Driver</button>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-md-2" >
                        <p class="mt-2">Driver Number</p>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control carinput" id="inlineFormInputGroupDriverNo" placeholder="Enter Driver Number">
                    </div>
                    <div class="col-md-2" >
                        <p class="mt-2">Driver Mobile Number</p>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control carinput" id="inlineFormInputGroupMobileNo" placeholder="Enter Mobile Number">
                    </div>
                </div>

                <div class="row justify-content-start">
                    <div class="col-md-2" >
                        <p class="mt-2">Mobile Network Provider</p>
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control carinput" id="inlineFormInputGroupDriverNo" placeholder="Enter Driver Number">
                    </div>
                </div>

            </div>
        </div>`;
        $("#createDriver2").append(output);
      });
    });

    $(document).ready(function() {
      $("#inlineFormCustomSelect")
        .change(function() {
          $(this)
            .find("option:Selected")
            .each(function() {
              var option = $(this).attr("value");
              if (option) {
                $(".box")
                  .not("." + option)
                  .hide();
                $("." + option).show();
              } else {
                $(".box").hide();
              }
            });
        })
        .change();
    });
  }
  render() {
    return (
      <React.Fragment>
        <div id="dipatch_bar" style={{ marginTop: "5%" }}>
          <div class="container-fluid dip_bar">
            <div class="d-flex justify-content-between">
              <strong class="mt-2"> Create Trip</strong>
              <form class="form-inline" action="#">
                <button class="w3-button w3-small">
                  <i class="fas fa-times"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        <form>
          <div class="container-fluid animated slideInDown pad w3-white">
            <div
              class="container-fluid p-3"
              style={{ marginRight: 0, border: "0px solid black" }}
            >
              <div class="row">
                <div class="col-md-12">
                  <b class="textblue w3-small">Trip Details</b>
                </div>
              </div>
              <div class="row justify-content-between">
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>Dispatch Number</b>
                  </p>
                </div>
                <div class="col-md-4 ">
                  <input
                    type="text"
                    class="p-form-input-control w3-small"
                    id="tripDispacthNum"
                    placeholder="Enter Dispatch Number"
                  />
                </div>
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>Order Number</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="p-form-input-control w3-small"
                    id="tripOrderNum"
                    placeholder="Enter Order Number"
                  />
                </div>
              </div>
              <div class="row justify-content-between">
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>From Location</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="p-form-input-control w3-small"
                    id="tripLocation"
                    placeholder="Enter From Location"
                  />
                </div>
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>To Location</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="p-form-input-control w3-small"
                    id="tripToLocation"
                    placeholder="Enter To Location"
                  />
                </div>
              </div>
              <div class="row justify-content-between">
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>Route</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="p-form-input-control w3-small"
                    id="tripRoute"
                    placeholder="Enter Route"
                  />
                </div>
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>Trip Type</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <select
                    class="custom-select p-form-input-control mr-sm-2"
                    id="tripSelect"
                  >
                    <option selected>Select Trip Type</option>
                    <option value="speed">Speed</option>
                    <option value="radar">Radar</option>
                  </select>
                </div>
              </div>
              <div class="row justify-content-between">
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>Start Date & Time</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="p-form-input-control w3-small"
                    id="tripStartDateTime"
                    placeholder="Enter Start Date & Time"
                  />
                </div>
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>Estimated End Date & Time</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="p-form-input-control w3-small"
                    id="tripEndDateTime"
                    placeholder="Enter End Date & Time"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Dispatch end -->
        
        <!-- Speed Tabs -->
        <!-- Dispatch Details Start --> */}
          <div class="container-fluid animated slideInDown pad w3-white ">
            <div
              class="container-fluid p-3"
              style={{ marginRight: "0", border: "0px solid black" }}
            >
              <div class="row">
                <div class="col-md-2">
                  <p class="mt-2 w3-small textblue">
                    <b>Dispatch Details</b>
                  </p>
                </div>
                <div class="col-md-2 offset-md-8 text-right">
                  <button class="w3-button w3-tiny w3-blue">
                    <i class="fas fa-plus"></i> New{" "}
                  </button>
                </div>
              </div>
              <div class="row" id="dispatch_add_sku">
                <div class="col-md-12">
                  <table class="w3-table small">
                    <tr class=" w3-border">
                      <th class="text-center">Delivery No</th>
                      <th class="text-center">SKU Code</th>
                      <th class="text-center">SKU Name</th>
                      <th class="text-center">SKU Type</th>
                      <th class="text-center">SKU Quantity</th>
                      <th class="text-center">Net Weight</th>
                      <th class="text-center">Gross Weight</th>
                      <th class="text-center">Temp Min</th>
                      <th class="text-center">Temp Max</th>
                      <th class="text-center">Pickup Location</th>
                      <th class="text-center">Drop Location</th>
                      <th class="text-center">Edit</th>
                      <th class="text-center">Delete</th>
                    </tr>
                    <tr>
                      <td class="text-center">DN54611521</td>
                      <td class="text-center">P123456</td>
                      <td class="text-center">SKU 1</td>
                      <td class="text-center">Refer</td>
                      <td class="text-center">1000</td>
                      <td class="text-center">40</td>
                      <td class="text-center">30</td>
                      <td class="text-center">30&deg;C</td>
                      <td class="text-center">60&deg;C</td>
                      <td class="text-center">Mumbai</td>
                      <td class="text-center">Pune</td>
                      <td class="text-center">
                        <i class="fas fa-pen border p-1 w3-round"></i>
                      </td>
                      <td class="text-center">
                        <i class="fas fa-trash border p-1 w3-round"></i>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">DN54611521</td>
                      <td class="text-center">P123456</td>
                      <td class="text-center">SKU 1</td>
                      <td class="text-center">Refer</td>
                      <td class="text-center">1000</td>
                      <td class="text-center">40</td>
                      <td class="text-center">30</td>
                      <td class="text-center">30&deg;C</td>
                      <td class="text-center">60&deg;C</td>
                      <td class="text-center">Mumbai</td>
                      <td class="text-center">Pune</td>
                      <td class="text-center">
                        <i class="fas fa-pen border p-1 w3-round"></i>
                      </td>
                      <td class="text-center">
                        <i class="fas fa-trash border p-1 w3-round"></i>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">DN54611521</td>
                      <td class="text-center">P123456</td>
                      <td class="text-center">SKU 1</td>
                      <td class="text-center">Refer</td>
                      <td class="text-center">1000</td>
                      <td class="text-center">40</td>
                      <td class="text-center">30</td>
                      <td class="text-center">30&deg;C</td>
                      <td class="text-center">60&deg;C</td>
                      <td class="text-center">Mumbai</td>
                      <td class="text-center">Pune</td>
                      <td class="text-center">
                        <i class="fas fa-pen border p-1 w3-round"></i>
                      </td>
                      <td class="text-center">
                        <i class="fas fa-trash border p-1 w3-round"></i>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">DN54611521</td>
                      <td class="text-center">P123456</td>
                      <td class="text-center">SKU 1</td>
                      <td class="text-center">Refer</td>
                      <td class="text-center">1000</td>
                      <td class="text-center">40</td>
                      <td class="text-center">30</td>
                      <td class="text-center">30&deg;C</td>
                      <td class="text-center">60&deg;C</td>
                      <td class="text-center">Mumbai</td>
                      <td class="text-center">Pune</td>
                      <td class="text-center">
                        <i class="fas fa-pen border p-1 w3-round"></i>
                      </td>
                      <td class="text-center">
                        <i class="fas fa-trash border p-1 w3-round"></i>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">DN54611521</td>
                      <td class="text-center">P123456</td>
                      <td class="text-center">SKU 1</td>
                      <td class="text-center">Refer</td>
                      <td class="text-center">1000</td>
                      <td class="text-center">40</td>
                      <td class="text-center">30</td>
                      <td class="text-center">30&deg;C</td>
                      <td class="text-center">60&deg;C</td>
                      <td class="text-center">Mumbai</td>
                      <td class="text-center">Pune</td>
                      <td class="text-center">
                        <i class="fas fa-pen border p-1 w3-round"></i>
                      </td>
                      <td class="text-center">
                        <i class="fas fa-trash border p-1 w3-round"></i>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">DN54611521</td>
                      <td class="text-center">P123456</td>
                      <td class="text-center">SKU 1</td>
                      <td class="text-center">Refer</td>
                      <td class="text-center">1000</td>
                      <td class="text-center">40</td>
                      <td class="text-center">30</td>
                      <td class="text-center">30&deg;C</td>
                      <td class="text-center">60&deg;C</td>
                      <td class="text-center">Mumbai</td>
                      <td class="text-center">Pune</td>
                      <td class="text-center">
                        <i class="fas fa-pen border p-1 w3-round"></i>
                      </td>
                      <td class="text-center">
                        <i class="fas fa-trash border p-1 w3-round"></i>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Dispatch Details end --> */}

          {/* <!-- Tripleg Details Start --> */}
          <div class="container-fluid animated slideInDown pad w3-white">
            <div
              class="container-fluid p-3"
              style={{ marginRight: 0, border: "0px solid black" }}
            >
              <div class="row">
                <div class="col-md-12">
                  <b class="textblue w3-small">Tripleg Details</b>
                </div>
              </div>
              <div class="row justify-content-between">
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>From Location</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="p-form-input-control w3-small"
                    id="tripDispacthNum"
                    placeholder="Enter Dispatch Number"
                  />
                </div>
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>To Location</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="p-form-input-control w3-small"
                    id="tripOrderNum"
                    placeholder="Enter Order Number"
                  />
                </div>
              </div>
              <div class="row justify-content-between">
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>Start Date & Time</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="p-form-input-control w3-small"
                    id="tripLocation"
                    placeholder="Enter From Location"
                  />
                </div>
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>Estimated End Date & Time</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="p-form-input-control w3-small"
                    id="tripToLocation"
                    placeholder="Enter To Location"
                  />
                </div>
              </div>
              <div class="row justify-content-between">
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>Mode of Transport</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <select
                    class="custom-select p-form-input-control mr-sm-2"
                    id="tripSelect"
                  >
                    <option selected>Select Mode of Transport</option>
                    <option value="speed">Road</option>
                    <option value="radar">Radar</option>
                  </select>
                </div>
                <div class="col-md-2">
                  <p class="mt-2 w3-small">
                    <b>Tracking Type</b>
                  </p>
                </div>
                <div class="col-md-4">
                  <select
                    class="custom-select p-form-input-control mr-sm-2"
                    id="inlineFormCustomSelect"
                  >
                    <option selected>Select Tracking Type</option>
                    <option value="speed">GPS</option>
                    <option value="radar">Radar</option>
                    <option value="api">API</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="box speed">
              <div class="container-fluid p-3" style={{ marginRight: "0" }}>
                <div class="row">
                  <div class="col-md-12">
                    <b class="textblue w3-small">Vehicle Details</b>
                  </div>
                </div>
                <div class="row justify-content-between">
                  <div class="col-md-2">
                    <p class="mt-2 w3-small">
                      <b>Vehicle Number</b>
                    </p>
                  </div>
                  <div class="col-md-4">
                    <input
                      type="text"
                      class="p-form-input-control"
                      id="inlineFormInputGroupVehicleNo"
                      placeholder="Enter Vehicle Number"
                    />
                  </div>
                  <div class="col-md-2">
                    <p class="mt-2 w3-small">
                      <b>Vehicle Type</b>
                    </p>
                  </div>
                  <div class="col-md-4">
                    <select
                      class="custom-select mr-sm-2"
                      id="inlineFormCustomSelectVehicle"
                    >
                      <option selected>Select Vehicle Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div class="row justify-content-between">
                  <div class="col-md-2">
                    <p class="mt-2 w3-small">
                      <b>Transporter</b>
                    </p>
                  </div>
                  <div class="col-md-4">
                    <input
                      type="text"
                      class="p-form-input-control"
                      id="inlineFormInputGroupTransport"
                      placeholder="Enter Transporter Number"
                    />
                  </div>
                  <div class="col-md-2">
                    <p class="mt-2 w3-small">
                      <b>Transporter LR Number</b>
                    </p>
                  </div>
                  <div class="col-md-4">
                    <input
                      type="text"
                      class="p-form-input-control"
                      id="inlineFormInputGrouporderNo"
                      placeholder="Enter Transporter LR Number"
                    />
                  </div>
                </div>

                <br />
                <div class="row justify-content-between">
                  <div class="col-md-6">
                    <p class="textblue w3-small">
                      <b>Driver Details</b>
                    </p>
                  </div>
                  <div class="col-md-6" style={{ textAlign: "right" }}>
                    <button
                      id="newDriver"
                      type="button"
                      class="w3-button w3-tiny w3-blue"
                    >
                      <i class="fas fa-plus"></i> New Driver
                    </button>
                  </div>
                </div>

                <div class="row justify-content-between">
                  <div class="col-md-2">
                    <p class="mt-2 w3-small">
                      <b>Driver Number</b>
                    </p>
                  </div>
                  <div class="col-md-4">
                    <input
                      type="text"
                      class="p-form-input-control"
                      id="inlineFormInputGroupDriverNo"
                      placeholder="Enter Driver Number"
                    />
                  </div>
                  <div class="col-md-2">
                    <p class="mt-2 w3-small">
                      <b>Driver Mobile Number</b>
                    </p>
                  </div>
                  <div class="col-md-4">
                    <input
                      type="text"
                      class="p-form-input-control"
                      id="inlineFormInputGroupMobileNo"
                      placeholder="Enter Mobile Number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Tripleg Details Ends --> */}

          {/* <!-- Driver Details --> */}
          <div class="container-fluid animated slideInDown pad w3-white"></div>
          {/* <!-- Driver Ends --> */}

          {/* <!-- Driver Details --> */}
          <div
            class="container-fluid animated slideInDown pad w3-white"
            id="createDriver"
          ></div>
          {/* <!-- Driver Ends --> */}

          <div class="row justify-content-center">
            <button
              id="newTripLeg"
              type="button"
              class="w3-button w3-tiny w3-blue"
            >
              <i class="fas fa-plus"></i> New Tripleg
            </button>{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              id="newTripLeg"
              type="button"
              class="w3-button w3-tiny w3-blue"
            >
              {" "}
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Trips;
