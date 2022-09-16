export default function Posts() {
	return (
		<div class="posts">
			<div class="post">
				<div class="top">
					<div class="user">
						<img src="assets/img/meowed.svg" alt="profile" />
						meowed
					</div>
					<div class="actions">
						<ion-icon name="ellipsis-horizontal"></ion-icon>
					</div>
				</div>

				<div class="content">
					<img src="assets/img/gato-telefone.svg" alt="post" />
				</div>

				<div class="background">
					<div class="actions">
						<div>
							<ion-icon name="heart-outline"></ion-icon>
							<ion-icon name="chatbubble-outline"></ion-icon>
							<ion-icon name="paper-plane-outline"></ion-icon>
						</div>
						<div>
							<ion-icon name="bookmark-outline"></ion-icon>
						</div>
					</div>

					<div class="likes">
						<img src="assets/img/respondeai.svg" alt="liked by" />
						<div class="text">
							Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
						</div>
					</div>
				</div>
			</div>

			<div class="post">
				<div class="top">
					<div class="user">
						<img src="assets/img/barked.svg" alt="profile" />
						barked
					</div>
					<div class="actions">
						<ion-icon name="ellipsis-horizontal"></ion-icon>
					</div>
				</div>

				<div class="content">
					<img src="assets/img/dog.svg" alt="post" />
				</div>

				<div class="background">
					<div class="actions">
						<div>
							<ion-icon name="heart-outline"></ion-icon>
							<ion-icon name="chatbubble-outline"></ion-icon>
							<ion-icon name="paper-plane-outline"></ion-icon>
						</div>
						<div>
							<ion-icon name="bookmark-outline"></ion-icon>
						</div>
					</div>

					<div class="likes">
						<img src="assets/img/adorable_animals.svg" alt="liked by" />
						<div class="text">
							Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
