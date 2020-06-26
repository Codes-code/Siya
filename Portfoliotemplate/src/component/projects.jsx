import React from "react";
import Vmarine from "../img/Vmarine.jpg";
import aguadeluz from "../img/aguaDeLuz.png";
import todo from "../img/todolist.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Nazara - Lake House</h2>
									</div>
									<div>
										<button
											id="vmarine-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"vmarine"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Piano Forest - Architecture Thesis</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Pavilion Design - Interactive Public Space</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="vmarine" className="modal-card">
						<div className="visual">
							<img src={Vmarine} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Nazara</h2>
							<div className="modal-description">
								<ul>
									<li>
										The site sits on a land with a potential of spectacular
										views, hence the aim of the design of the house was to 
										provide multiple scenic views through a strong 
										inside-outside relationship.
									</li>
									<li>
										The House is named 'NAZARA' which is concieved as a form with 
										various 'Levels' to help the user enjoy the serenity of the Lake view. 
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h4>-2016</h4>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"vmarine"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={aguadeluz} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Piano Forest | Music Conservatory</h2>
							<div className="modal-description">
								<ul>
									<li>
										Sound and Music Institute, Shimla
									</li>
									<li>
										The purpose of this thesis to explore this divine interjection of the two art forms in a way
										that the two are inseparable; ‘music becomes structure’ and in doing this are studied the
										principles of both arts, composition and representational imagery of music and forms.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h4>-2020</h4>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={todo} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Pavilion Design - Interactive Public Space</h2>
							<div className="modal-description">
								<ul>
									<li>
										The idea is to create an outdoor interactice space for public use.
									</li>
									<li>
										It is a design made to serve multiple purposes at once.
										The pavillion is a monolithic design with 3 major design components, namely:
										<ul>
										<li>	
											Seating Platform in South-West
										</li>
										<li>	
											Solid and Semi-Solid roof covering
										</li>
										<li>	
											Vertical porous Facade in North-East, installed with a WaterFall
										</li>
										</ul>
									<li>	
										The Pavillion is placed in a North-West and South-East oreintation stratergically, 
										to be aligned in such a mannerthat it's NE porous facade is open to cross ventilation
										from the prevailing winds. 
									</li>
										
									</li>	
								</ul>
							</div>
							<div className="modal-bottom">
								<h4>-2019</h4>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
