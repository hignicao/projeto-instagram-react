export default function User(props) {
	return (
		<div class="user">
			<img src={props.usrImg} alt="User" />
			<div class="text">
				<strong>{props.usrName}</strong>
				<span>
					{props.name}
					<ion-icon name="create-outline"></ion-icon>
				</span>
			</div>
		</div>
	);
}
