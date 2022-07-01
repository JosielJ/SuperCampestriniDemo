import "./promo.scss";

import { motion } from "framer-motion";

import { BsLink } from "react-icons/bs";

import tempwhats from "../../assets/Tempwhats.png";
import tempinsta from "../../assets/Tempinsta.png";

function Promo(){
	return(
		<div className="promo__container">
			<div className="promo__whats">
				<img src={tempwhats} alt="tempwhats" className="promo__tempwhats"/>
				<motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98}} className="promo__btn__whats">
					<h1 className="promo__btn__whats__text">WhatsApp</h1>
					<BsLink/>
				</motion.button>
			</div>
			<div className="promo__insta">
				<img src={tempinsta} alt="tempwhats" className="promo__tempinsta"/>
				<motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98}} className="promo__btn__insta">
					<h1 className="promo__btn__insta__text">Instagram</h1>
					<BsLink/>
				</motion.button>
			</div>
		</div>
	);
}

export default Promo;