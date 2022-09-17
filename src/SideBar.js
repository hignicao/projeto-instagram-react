import React from "react";
import Suggestions from "./Suggestions";
import User from "./User";

export default function SideBar() {
	const [img, setImg] = React.useState("assets/img/default-avatar.png");
	const [user, setUser] = React.useState("Usuário");
	const [name, setName] = React.useState("Nome do usuário");

	return (
		<div class="sidebar">
			<User usrImg={img} usrName={user} name={name} setUser={setUser} setName={setName} setImg={setImg} />

			<Suggestions />

			<div class="links">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</div>

			<div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
		</div>
	);
}
