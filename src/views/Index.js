import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	NavItem,
	NavLink,
	Nav,
	Progress,
	Table,
	Container,
	Row,
	Col,
	UncontrolledDropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	UncontrolledTooltip,
} from "reactstrap";

// core components
import {
	chartOptions,
	parseOptions,
	chartExample1,
	chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { Link } from "react-router-dom";

const Index = (props) => {
	const [activeNav, setActiveNav] = useState(1);
	const [chartExample1Data, setChartExample1Data] = useState("data1");

	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}

	const toggleNavs = (e, index) => {
		e.preventDefault();
		setActiveNav(index);
		setChartExample1Data("data" + index);
	};
	return (
		<>
			{/* <!-- BIOLINK START --> */}
			<div
				class="modal fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h3 class="modal-title" id="exampleModalLabel">
								<span className="borderBottom">Create bio</span>link page
							</h3>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">
									<i class="fas fa-times"></i>
								</span>
							</button>
						</div>
						<div class="modal-body pt-0">
							<div
								style={{ border: "1px solid #ccc", height: "36px" }}
								className="d-none d-sm-flex rounded-3 my-1"
							>
								<p
									style={{ background: "#ededed" }}
									className="mb-0 small d-flex align-items-center px-2 h-100"
								>
									https://test.minilink.bio/
								</p>
								<input
									style={{ fontSize: "0.9rem" }}
									type="text"
									placeholder="your-custom-alias"
									className="border-0 border-start pl-3 pr-1 w-100"
								/>
							</div>
							<div
								style={{ border: "1px solid #ccc", height: "70px" }}
								className="d-flex d-sm-none flex-column rounded-3 my-1"
							>
								<p
									style={{ background: "#ededed" }}
									className="mb-0 small d-flex align-items-center px-2 h-100"
								>
									https://test.minilink.bio/
								</p>
								<input
									style={{ fontSize: "0.9rem" }}
									type="text"
									placeholder="your-custom-alias"
									className="border-0 border-start pl-3 pr-1 h-100"
								/>
							</div>
							<p style={{ fontSize: "12px" }} className="small fw-bold mb-2">
								Leave empty for a random generated one.
							</p>
							<div className="w-100 mt-4">
								<Button
									variant="contained"
									color="primary"
									href="#contained-buttons"
									className="text-white w-100 btn btn-primary"
								>
									Create biolink page
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- BIOLINK END --> */}

			{/* <!-- SHORTEND START --> */}
			<div
				class="modal fade"
				id="exampleModal2"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h3 class="modal-title" id="exampleModalLabel">
								<span className="borderBottom">Create bio</span>link page
							</h3>
							<button
								type="button"
								class="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">
									<i class="fas fa-times"></i>
								</span>
							</button>
						</div>
						<div class="modal-body pt-0">
							<div className="text-secondary">
								<svg
									class="svg-inline--fa fa-signature fa-w-20 fa-fw fa-sm mr-1"
									aria-hidden="true"
									focusable="false"
									data-prefix="fa"
									data-icon="signature"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512"
									data-fa-i2svg=""
									width="20px"
									className="me-1"
								>
									<path
										fill="#212529"
										d="M623.2 192c-51.8 3.5-125.7 54.7-163.1 71.5-29.1 13.1-54.2 24.4-76.1 24.4-22.6 0-26-16.2-21.3-51.9 1.1-8 11.7-79.2-42.7-76.1-25.1 1.5-64.3 24.8-169.5 126L192 182.2c30.4-75.9-53.2-151.5-129.7-102.8L7.4 116.3C0 121-2.2 130.9 2.5 138.4l17.2 27c4.7 7.5 14.6 9.7 22.1 4.9l58-38.9c18.4-11.7 40.7 7.2 32.7 27.1L34.3 404.1C27.5 421 37 448 64 448c8.3 0 16.5-3.2 22.6-9.4 42.2-42.2 154.7-150.7 211.2-195.8-2.2 28.5-2.1 58.9 20.6 83.8 15.3 16.8 37.3 25.3 65.5 25.3 35.6 0 68-14.6 102.3-30 33-14.8 99-62.6 138.4-65.8 8.5-.7 15.2-7.3 15.2-15.8v-32.1c.2-9.1-7.5-16.8-16.6-16.2z"
									></path>
								</svg>
								<span className="text-dark ml-2 font-weight-600">Long URL</span>
							</div>
							<div className="mb-4 mt-1">
								<input
									style={{ border: "1px solid #ccc", fontSize: "0.9rem" }}
									type="text"
									className="w-100 py-1 px-2 rounded-3"
									placeholder="https://domain.com/example"
								/>
							</div>
							<div className="d-flex align-items-center mt-1">
								<i class="fas fa-link"></i>
								<div className="text-dark ml-2 font-weight-600">
									Biolink URL
								</div>
							</div>
							<div
								style={{ border: "1px solid #ccc", height: "36px" }}
								className="d-none d-sm-flex rounded-3 my-1"
							>
								<p
									style={{ background: "#ededed" }}
									className="mb-0 small d-flex align-items-center px-2 h-100"
								>
									https://test.minilink.bio/
								</p>
								<input
									style={{ fontSize: "0.9rem" }}
									type="text"
									placeholder="your-custom-alias"
									className="border-0 border-start pl-3 pr-1 w-100"
								/>
							</div>
							<div
								style={{ border: "1px solid #ccc", height: "70px" }}
								className="d-flex d-sm-none flex-column rounded-3 my-1"
							>
								<p
									style={{ background: "#ededed" }}
									className="mb-0 small d-flex align-items-center px-2 h-100"
								>
									https://test.minilink.bio/
								</p>
								<input
									style={{ fontSize: "0.9rem" }}
									type="text"
									placeholder="your-custom-alias"
									className="border-0 border-start pl-3 pr-1 h-100"
								/>
							</div>
							<p style={{ fontSize: "12px" }} className="small fw-bold mb-2">
								Leave empty for a random generated one.
							</p>
							<div className="w-100 mt-4">
								<Button
									variant="contained"
									color="primary"
									href="#contained-buttons"
									className="text-white w-100"
								>
									Create biolink page
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- SHORTEND END --> */}

			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				<Row>
					<Col className="mb-5 mb-xl-0" xl="12">
						<Card className="bg-gradient-default shadow">
							<CardHeader className="bg-transparent">
								<Row className="align-items-center">
									<div className="col">
										<h6 className="text-uppercase text-light ls-1 mb-1">
											Overview
										</h6>
										<h2 className="text-white mb-0">Performance</h2>
									</div>
									<div className="col">
										<Nav className="justify-content-end" pills>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeNav === 1,
													})}
													href="#pablo"
													onClick={(e) => toggleNavs(e, 1)}
												>
													<span className="d-none d-md-block">Month</span>
													<span className="d-md-none">M</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeNav === 2,
													})}
													data-toggle="tab"
													href="#pablo"
													onClick={(e) => toggleNavs(e, 2)}
												>
													<span className="d-none d-md-block">Week</span>
													<span className="d-md-none">W</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart">
									<Line
										data={chartExample1[chartExample1Data]}
										options={chartExample1.options}
										getDatasetAtEvent={(e) => console.log(e)}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
					{/* <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody> */}
					{/* Chart */}
					{/* <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col> */}
				</Row>
				<Row className="mt-5">
					<Col className="mb-5 mb-xl-0" xl="12">
						<Card className="shadow">
							<CardHeader className="border-0">
								<Row className="align-items-center">
									<div className="col">
										<h3 className="mb-0">Links</h3>
									</div>
									<UncontrolledDropdown>
										<DropdownToggle
											href="#pablo"
											role="button"
											color=""
											onClick={(e) => e.preventDefault()}
											size="sm"
											className="p-0"
										>
											<Button
												color="primary"
												onClick={(e) => e.preventDefault()}
												size="sm"
											>
												<i class="fas fa-plus mr-1"></i>
												Create link
											</Button>
										</DropdownToggle>
										<DropdownMenu className="dropdown-menu-arrow" right>
											<DropdownItem
												href="#pablo"
												onClick={(e) => e.preventDefault()}
												data-toggle="modal"
												data-target="#exampleModal"
											>
												<i class="ni ni-air-baloon text-info"></i>
												Biolink Page
											</DropdownItem>
											<DropdownItem
												href="#pablo"
												onClick={(e) => e.preventDefault()}
												data-toggle="modal"
												data-target="#exampleModal2"
											>
												<i className="ni ni-air-baloon text-danger"></i>
												Shortened URL
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
									<Button
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										size="sm"
										className="py-1 px-2"
									>
										<i class="fas fa-download"></i>
									</Button>
									<Button
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										size="sm"
										className="py-1 px-2"
									>
										<i class="fas fa-filter"></i>{" "}
									</Button>
								</Row>
							</CardHeader>
							<DropdownItem divider className="my-0" />
							<Table className="align-items-center table-flush" responsive>
								<tbody>
									{[1, 1, 1].map((prev, i) => {
										return (
											<tr>
												<th scope="row">
													<div className="d-flex align-items-center">
														<div className="mr-3">
															{(i === 1 && (
																<>
																	<UncontrolledTooltip
																		delay={0}
																		placement="top"
																		target={`tooltip3097232223343423822${i}32323`}
																	>
																		Biolink Page
																	</UncontrolledTooltip>
																	<div
																		id={`tooltip3097232223343423822${i}32323`}
																		className="icon icon-shape bg-danger text-white rounded-circle shadow"
																	>
																		<i class="fas fa-hashtag"></i>
																	</div>
																</>
															)) || (
																<>
																	<UncontrolledTooltip
																		delay={0}
																		placement="top"
																		target={`tooltip309723097323223822${i}`}
																	>
																		Shortened URL
																	</UncontrolledTooltip>
																	<div
																		id={`tooltip309723097323223822${i}`}
																		class="icon icon-shape bg-info text-white rounded-circle shadow"
																	>
																		<i class="fas fa-link"></i>
																	</div>
																</>
															)}
														</div>
														<div>
															<span className="font-weight-700 text-dark text-lg">
																Page-test
															</span>
															<br />
															<span>
																<i className="ni ni-bold-right"></i>{" "}
																https://test.minilink.bio/page-test
															</span>
														</div>
													</div>
												</th>
												<td>
													<UncontrolledTooltip
														delay={0}
														placement="top"
														target={`tooltip309723238${i}`}
													>
														Total pageviews
													</UncontrolledTooltip>
													<div
														id={`tooltip309723238${i}`}
														className="d-flex justify-content-end"
													>
														<span className="btn-secondary px-2 py-1 rounded-lg">
															<i className="ni ni-chart-bar-32 text-primary"></i>
															{"  "}
															<span className="text-sm text-dark font-weight-600">
																4
															</span>
														</span>
													</div>
												</td>
												<td>
													<UncontrolledTooltip
														delay={0}
														placement="top"
														target={`tooltip30972323822${i}`}
													>
														Launch on
													</UncontrolledTooltip>
													<div
														id={`tooltip30972323822${i}`}
														className="d-flex align-items-center justify-content-center"
													>
														<i className="ni ni-calendar-grid-58 mr-2"></i>
														13 July, 2021
													</div>
												</td>
												<td className="text-center">
													<UncontrolledTooltip
														delay={0}
														placement="top"
														target={`tooltip30972323232${i}`}
													>
														Change Status
													</UncontrolledTooltip>
													<label
														id={`tooltip30972323232${i}`}
														className="switch"
													>
														<input type="checkbox" defaultChecked />
														<span className="slider round"></span>
													</label>
												</td>
												<td className="text-right">
													<UncontrolledDropdown>
														<DropdownToggle
															className="btn-icon-only text-light"
															href="#pablo"
															role="button"
															size="sm"
															color=""
															onClick={(e) => e.preventDefault()}
														>
															<i className="fas fa-ellipsis-v" />
														</DropdownToggle>
														<DropdownMenu className="dropdown-menu-arrow" right>
															<DropdownItem
																href="/testPage"
																onClick={(e) => e.preventDefault()}
															>
																<i class="ni ni-ruler-pencil"></i>
																Edit
															</DropdownItem>
															<DropdownItem
																href="#pablo"
																onClick={(e) => e.preventDefault()}
															>
																<i className="ni ni-chart-bar-32"></i>
																Statistics
															</DropdownItem>
															<DropdownItem
																href="#pablo"
																onClick={(e) => e.preventDefault()}
															>
																<i class="fas fa-qrcode"></i>
																QR Code
															</DropdownItem>
															<DropdownItem
																href="#pablo"
																onClick={(e) => e.preventDefault()}
															>
																<i class="fas fa-times"></i>
																Delete
															</DropdownItem>
														</DropdownMenu>
													</UncontrolledDropdown>
												</td>
											</tr>
										);
									})}
								</tbody>
							</Table>
						</Card>
					</Col>
					{/* <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Referral</th>
                    <th scope="col">Visitors</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>1,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-gradient-danger"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>5,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">70%</span>
                        <div>
                          <Progress
                            max="100"
                            value="70"
                            barClassName="bg-gradient-success"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Google</th>
                    <td>4,807</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80%</span>
                        <div>
                          <Progress max="100" value="80" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Instagram</th>
                    <td>3,678</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">75%</span>
                        <div>
                          <Progress
                            max="100"
                            value="75"
                            barClassName="bg-gradient-info"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">twitter</th>
                    <td>2,645</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">30%</span>
                        <div>
                          <Progress
                            max="100"
                            value="30"
                            barClassName="bg-gradient-warning"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col> */}
				</Row>
			</Container>
		</>
	);
};

export default Index;
