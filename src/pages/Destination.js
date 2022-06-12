import React, { Component } from "react";
import Header from "../components/Header";
// import { Container } from "react-bootstrap";
import HeroDestination from "../components/HeroDestination";
import MainDestination from "../components/MainDestination";
import Recommendations from "../components/Recommendations";
class Destination extends Component {
  render() {
    return (
    //   <div>
    //     <Header />
    //     <HeroDestination />
    //     <MainDestination />
    //     <Recommendations />
    //   </div>
	<div>
			<Header/>
			{/* <HeroDestination/>
			<IntroArticle/> */}
		</div>
    );
  }
}

export default Destination;
