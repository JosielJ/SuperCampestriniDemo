import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Promo from "../../components/promo/promo";
import Slide from "../../components/slide/slide";

function Home(){
	return(
		<div className="home__container">
			<Navbar/>
			<Slide/>
			<Promo/>
			<Footer/>
		</div>
	);
}

export default Home;