function Suggestion(props) {
	return (
		<div class="suggestion">
			<div class="user">
				<img src={props.img} alt="profile" />
				<div class="text">
					<div class="name">{props.name}</div>
					<div class="follows">{props.follows}</div>
				</div>
			</div>

			<div class="follow">Seguir</div>
		</div>
	);
}

export default function Suggestions() {
	const suggestions = [
		{ img: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes", follows: "Segue você" },
		{ img: "assets/img/chibirdart.svg", name: "chibirdart", follows: "Segue você" },
		{ img: "assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar", follows: "Novo no Instagram" },
		{ img: "assets/img/adorable_animals.svg", name: "adorable_animals", follows: "Segue você" },
		{ img: "assets/img/smallcutecats.svg", name: "smallcutecats", follows: "Segue você" },
	];

	return (
		<div class="suggestions">
			<div class="title">
				Sugestões para você
				<div>Ver tudo</div>
			</div>

			{suggestions.map((s) => (
				<Suggestion img={s.img} name={s.name} follows={s.follows} />
			))}
		</div>
	);
}
