import React from "react";

import codepen from "../img/codepen.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								className="px-3"
								href="https://www.facebook.com/siya.sharma"
								target="_blank"
								rel="noopener noreferrer">
								
								<i class="big facebook icon"></i>
							</a>
							<a
								className="px-3"
								href="https://www.instagram.com/siyaaa_sharma/"
								target="_blank"
								rel="big noreferrer">
								
								<i class="big instagram icon"></i>
							</a>
							<a
								className="px-3"
								href="https://issuu.com/siyasharma28/docs/siya_sharma_2020_portfolio"
								target="_blank"
								rel="noopener noreferrer">
								
								<i class="big file alternate icon"></i>
							</a>
							<a
								className="px-3"
								href="https://www.linkedin.com/in/siya-sharma-68186a147/"
								target="_blank"
								rel="noopener noreferrer">
								
								<i class="big linkedin icon"></i>
							</a>
							<a
								className="px-3"
								href="https://www.linkedin.com/in/siya-sharma-68186a147/"
								target="_blank"
								rel="noopener noreferrer">
								
								<i class="big envelope icon"></i>
							</a>
						</div>
					</div>
					<h5 className="pt-4">Siya Sharma &copy; 2020</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
