<script setup>
	const checkout = async () => {
		try {
			const response = await $fetch('/api/checkout/session', {
				method: 'POST',
				/* body: {}, */
			});

			if (response) {
				console.log(response);
				window.location.href = response.headers.Location;
			}
		} catch (err) {
			console.log(`Ein Fehler ist aufgetreten: ${err.message}`);
		}
	};
</script>
<template>
	<div>
		<form @submit.prevent="checkout">
			<ul>
				<li>Produkt 1</li>
			</ul>
			<button type="submit">Jetzt Kaufen</button>
		</form>
	</div>
</template>
