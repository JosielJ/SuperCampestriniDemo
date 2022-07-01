import "./stores.scss";

import temptimbo from "../../assets/Temptimbo.png";
import tempbarravelha from "../../assets/Tempbarravelha.png";
import tempblumenau from "../../assets/Tempblumenau.png";


import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

function Stores(){
	return(
		<div className="stores__container">
			<Navbar/>
			<div className="stores__stores">
				<div className="stores__timbo">
					<img src={temptimbo}alt="timbo"/>
					<div>
						<h1>Timbó</h1>
						<h2>Endereço: R. Mal. Deodoro da Fonseca, 1585 - Das Nações, Timbó - SC, 89120-000</h2>
					</div>
				</div>
				<div className="stores__barravelha">
					<img src={tempbarravelha}alt="barravelha"/>
					<div>
						<h1>Barra Velha</h1>
						<h2>Endereço: Av. Gov. Celso Ramos, 980 - Jardim Icaraí, Barra Velha - SC, 88390-000</h2>
					</div>
				</div>
				<div className="stores__blumenau">
					<img src={tempblumenau}alt="blumenau"/>
					<div>
						<h1>Blumenau</h1>
						<h2>Endereço: R. Johann Sachse, 2476 - Salto Norte, Blumenau - SC, 89070-400</h2>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default Stores;