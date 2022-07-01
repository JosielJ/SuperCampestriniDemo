import "./offers.scss";

import { motion } from "framer-motion";

import { BsWhatsapp } from "react-icons/bs";

import tempromo from "../../assets/Temppromo.png";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Subord from "../../components/subord/subord";

function Offers(){

	return(
		<div className="offers__container">
			<Navbar/>
			<div className="offers__area">
				<div className="offers__sub">
					<Subord/>
				</div>
				<div className="offers__offer">
					<img src={tempromo}/>
					<div className="offers_whatsapp">
						<h1 className="offers_whatsapp_text">Cadastre-se em nosso WhatsApp para receber ofertas diárias!</h1>
						<motion.button whileHover={{cursor: "pointer", scale: 1.02}} whileTap={{scale: 0.98}} className="offers__btn">
							<h1 className="promo__btn__text">WhatsApp</h1>
							<BsWhatsapp/>
						</motion.button>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default Offers;