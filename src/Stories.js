function Story(props) {
	return (
		<div class="story">
			<div class="image">
				<img src={props.img} alt="profile" />
			</div>
			<div class="user">{props.name}</div>
		</div>
	);
}

export default function Stories() {
	const stories = [
		{ img: "assets/img/9gag.svg", name: "9gag" },
		{ img: "assets/img/meowed.svg", name: "meowed" },
		{ img: "assets/img/barked.svg", name: "barked" },
		{ img: "assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet" },
		{ img: "assets/img/wawawicomics.svg", name: "wawawicomics" },
		{ img: "assets/img/respondeai.svg", name: "respondeai" },
		{ img: "assets/img/filomoderna.svg", name: "filomoderna" },
		{ img: "assets/img/memeriagourmet.svg", name: "memeriagourmet" },
	];

	return (
		<div class="stories">
			{stories.map((s) => (
				<Story img={s.img} name={s.name} />
			))}

			<div class="arrow">
				<ion-icon name="chevron-forward-circle"></ion-icon>
			</div>
		</div>
	);
}
