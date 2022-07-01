import "./about.scss";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

function About(){
	return(
		<div className="about__container">
			<Navbar/>
			<div className="about_text">
				<h1>Quem somos?</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet gravida elit. Donec nisl lorem, congue sed pulvinar quis, imperdiet ac enim. Integer rhoncus, est sit amet scelerisque malesuada, elit felis interdum orci, ac aliquam ex purus non urna. Mauris at convallis sem. Praesent laoreet fermentum facilisis. Praesent ut purus risus. Nunc luctus vestibulum nisi non consequat. Cras id pharetra lorem, at sollicitudin dolor. Sed mollis ullamcorper venenatis. Etiam rutrum nisl non leo vestibulum fermentum. In nisi diam, bibendum a ornare dictum, luctus vitae velit. Curabitur sed pharetra ex.
				Integer iaculis lacus id velit commodo fermentum. Mauris eu magna lacus. Suspendisse sit amet nisi in lacus aliquam congue quis non justo. Nam interdum, lacus ut porttitor dictum, augue risus volutpat nisl, et cursus libero nunc in ipsum. Vestibulum ligula neque, condimentum eu metus a, fringilla aliquam tortor. Vivamus vel iaculis erat. Nam euismod ultrices lectus, ut consectetur ex pellentesque quis. Sed feugiat auctor odio, nec ultricies nisi pharetra quis.
				Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean hendrerit lobortis mollis. Nullam varius varius dignissim. Praesent ac ex vel sapien convallis malesuada. Donec vestibulum, nunc sit amet imperdiet aliquet, tortor turpis convallis eros, sed suscipit sapien ligula non turpis. Nam laoreet nisi in auctor laoreet. Quisque porta iaculis risus vitae tristique.
				Sed egestas urna nunc, eget mattis felis faucibus condimentum. Donec tristique efficitur felis, id placerat felis mollis in. Vivamus blandit sit amet orci sit amet facilisis. Cras ultricies commodo mauris non scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porta lacus a nibh bibendum, a feugiat ante mattis. Duis sollicitudin eros quam, at viverra magna sodales eu. Nunc porttitor tristique arcu. Donec porttitor quis ligula non scelerisque.
				Maecenas nulla turpis, posuere in porttitor eu, porta vel massa. Nulla in lacus consectetur, fringilla risus sit amet, imperdiet turpis. Donec varius consectetur enim, ut blandit dolor volutpat a. Phasellus nisi elit, fringilla ut pulvinar sit amet, lacinia vitae lacus. Sed eget ultrices lorem. Curabitur id augue at massa faucibus interdum. Fusce euismod turpis et magna laoreet tristique. Donec venenatis quam nisi, et varius elit bibendum non.
				</p>
			</div>
			<Footer/>
		</div>
	);
}

export default About;