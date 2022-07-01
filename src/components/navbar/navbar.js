import "./navbar.scss";

import { motion } from "framer-motion";
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";

import templogo from "../../assets/Templogo.png";

function Navbar(){
	return(
		<div className="navbar__container">
			<img src={templogo} alt="templogo" className="navbar__logo"/>
			<div className="navbar__links">
				<motion.div className="navbar__link__text">
					<Link to="/"><h1>Home</h1></Link>
				</motion.div>
				<motion.div className="navbar__link__text">
					<Link to="/about"><h1>Sobre</h1></Link>
				</motion.div>
				<motion.div className="navbar__link__text">
					<Link to="/offers"><h1>Ofertas</h1></Link>
				</motion.div>
				<motion.div className="navbar__link__text">
					<Link to="/stores"><h1>Lojas</h1></Link>
				</motion.div>
				<motion.div className="navbar__link__text">
					<Link to="/jobs"><h1>Trabalhe Conosco</h1></Link>
				</motion.div>
				<div className="navbar__link__sm">
					<AiOutlineWhatsApp/>
					<AiOutlineInstagram/>
					<AiOutlineMail/>
					<AiOutlinePhone/>
				</div>
			</div>
		</div>
	);
}

export default Navbar;