<?php
	include 'components/header.php';
?>

<div class="app">
	<?php
		include 'components/footer/footer.php';
		include 'components/top-menu/top-menu.php';
	?>

	<h1>1. Bench press</h1>
	
	<form action="./overview.php" method="POST" class="form-inline workout-form">	  
		
		<div class="set">
			<label>First set</label>
			<input type="text" class="form-control" placeholder="Weight" name="email" id="email">
			<input type="text" class="form-control" placeholder="Sets" name="email" id="email">
		</div>

		<div class="set">
			<label>Second set</label>
			<input type="text" class="form-control" placeholder="Weight" name="email" id="email">
			<input type="text" class="form-control" placeholder="Sets" name="email" id="email">
		</div>

		<div class="set">
			<label>Third set</label>
			<input type="text" class="form-control" placeholder="Weight" name="email" id="email">
			<input type="text" class="form-control" placeholder="Sets" name="email" id="email">
		</div>

		<button type="submit" class="workout-button" name="submit">Next</button>
	</form>

</div>

</body>