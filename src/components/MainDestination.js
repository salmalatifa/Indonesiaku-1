import React, { Component } from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
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
				<Row xs={1} md={2} lg={2} xl={4}>
				{destination.map((value,  index)  => {
								return (
									<Col key={index}>
										<a href={value.nama}>
										<Card>
											<Card.Img variant="top" src={value.gambar} alt={value.nama} className="destination-image"/>
											<Card.Body>
												<Card.Title className="destination-text">{value.nama}</Card.Title>
											</Card.Body>
										</Card>
										</a>
									</Col>
								);
							})}
				</Row>
			</Container>
		)
	}
}

export default MainDestination;