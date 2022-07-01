import "./subord.scss";

export default function Subord() {
	return(
		<div className="subord__container">
			<label htmlFor="sub">Escolha a unidade mais próxima:</label>
			<select name="sub" id="sub">
				<option value=""></option>
				<option value="timbo">Timbó</option>
				<option value="barravelha">Barra Velha</option>
				<option value="blumenau">Blumenau</option>
			</select>
		</div>
	);
}
