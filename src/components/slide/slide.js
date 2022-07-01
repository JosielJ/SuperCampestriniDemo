import "./slide.scss";

import tempbanner from "../../assets/Tempbanner.png";

function Slide(){
	return(
		<div className="slide__container">
			<img src={tempbanner} alt="tempbanner" className="slide__tempbanner"/>
		</div>
	);
}

export default Slide;