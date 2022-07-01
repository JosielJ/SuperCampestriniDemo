import "./jobs.scss";

import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

function Jobs(){
	return(
		<div className="jobs__container">
			<Navbar/>
			<div className="jobs__form">
				<h1>Trabalhe Conosco</h1>
				<div className="jobs__form__fields">
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default Jobs;