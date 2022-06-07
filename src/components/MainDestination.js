import React, { Component } from "react";
import { Container,Row,Col } from "react-bootstrap";
import destination from "../data/Destination.js";
import "../styles/MainHome.css";

class MainDestination extends Component {
	render() {
		return (
			<Container>
				<Row className="justify-content-md-center">
					<Col md="auto">
						<h2 className="title-text">Destinasi Pilihan</h2>
						<p className="descrip-text">Temukan keindahan Indonesia dengan mengunjungi destinasi pilihan</p>
					</Col>
				</Row>
				<Row>
				{destination.map((value,  index)  => {
								return (
									<Col>
									<div className="destination-container" key={index + 1}>
										<div className="destination-image">
											<img src={value.gambar} alt={value.nama} />
											<h3 className="destination-text">{value.nama}</h3>	
										</div>
									</div>
									</Col>
								);
							})}
				</Row>
			</Container>
		)
	}
}

export default MainDestination;