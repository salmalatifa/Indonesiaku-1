import React, { Component } from "react";
import Header from "../components/Header";
// import { Container } from "react-bootstrap";
import HeroDestination from "../components/HeroDestination";
class Destination extends Component {
	render() {
		return (
			<div>
				<Header />
				<HeroDestination />
			</div>
		)
	}
}

export default Destination;