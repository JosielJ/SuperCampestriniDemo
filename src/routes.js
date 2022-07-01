import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Offers from "./pages/offers/offers";
import Stores from "./pages/stores/stores";
import Jobs from "./pages/jobs/jobs";

export default function AppRouter(){
	return(
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/offers" element={<Offers/>}/>
				<Route path="/stores" element={<Stores/>}/>
				<Route path="/jobs" element={<Jobs/>}/>
			</Routes>
		</Router>
	);
}