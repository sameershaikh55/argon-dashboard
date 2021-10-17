import { Link } from "react-router-dom";
// reactstrap components
import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form,
	FormGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	InputGroup,
	Navbar,
	Nav,
	Container,
	Media,
} from "reactstrap";

const AdminNavbar = (props) => {
	return (
		<>
			<Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
				<Container fluid>
					<Link
						className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
						to="/"
					>
						{props.brandText}
					</Link>
					<Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
						<FormGroup className="mb-0">
							<InputGroup className="input-group-alternative">
								<InputGroupAddon addonType="prepend">
									<InputGroupText>
										<i className="fas fa-search" />
									</InputGroupText>
								</InputGroupAddon>
								<Input placeholder="Search" type="text" />
							</InputGroup>
						</FormGroup>
					</Form>
					<Nav className="align-items-center d-none d-md-flex" navbar>
						<UncontrolledDropdown nav>
							<DropdownToggle className="pr-0" nav>
								<Media className="align-items-center">
									<span className="avatar avatar-sm rounded-circle">
										<img
											alt="..."
											src={
												require("../../assets/img/theme/team-4-800x800.jpg")
													.default
											}
										/>
									</span>
									<Media className="ml-2 d-none d-lg-block">
										<span className="mb-0 text-sm font-weight-bold">
											AltumCode
										</span>
									</Media>
								</Media>
							</DropdownToggle>
							<DropdownMenu className="dropdown-menu-arrow" right>
								<DropdownItem className="noti-title" header tag="div">
									<h6 className="text-overflow m-0">Welcome!</h6>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-single-02" />
									<span>Admin</span>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-world-2" />
									<span>Custom Domain</span>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-active-40" />
									<span>Links</span>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-single-copy-04" />
									<span>Projects</span>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-image" />
									<span>Pixel</span>
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-circle-08" />
									<span>Account</span>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-ruler-pencil" />
									<span>Plan</span>
								</DropdownItem>
								<DropdownItem to="/admin/user-profile" tag={Link}>
									<i className="ni ni-atom" />
									<span>Api</span>
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
									<i className="ni ni-user-run" />
									<span>Logout</span>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default AdminNavbar;
