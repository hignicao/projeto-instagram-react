export default function User(props) {
	function changeUser() {
		props.setUser(prompt("Digite o seu usuário"));
		props.setName(prompt("Digite o seu nome"));
	}

	function changeImg() {
		props.setImg(prompt("Digite o link da sua imagem"));
	}

	return (
		<div class="user">
			<img onClick={changeImg} src={props.usrImg} alt="User" />
			<div class="text">
				<strong>{props.usrName}</strong>
				<span>
					{props.name}
					<ion-icon onClick={changeUser} name="create-outline"></ion-icon>
				</span>
			</div>
		</div>
	);
}
