<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<?php include 'inc/head_common.php'; ?>
	<link rel="stylesheet" href="css/workshops_.css">
	<title>Workshops con Bootstrap 3</title>
</head>
<body>
	<?php include 'inc/header.php'; ?>
	
	<div id="workshop-list">
	<!--div contenedor genéroico, no bootstrap, para agupar los artículos ¿section?-->

		<article id="w1" class="workshop workshop-left">
		<!--El artículo utiliza el ancho completo, porque esta fuera de Bootstrap:
		Lo único que contendrá es la imagen / el color de fondo.-->
			<div class="container">
			<!--Dentro del artículo se incluye un container para recuperar el ancho adecuado
			 y poder dividirlo en filas y columnas-->
				<div class="row">					
					<div class="col-xs-12 col-sm-3 col-sm-push-9 col-md-4 col-md-push-8 col-lg-6 col-lg-push-6 date-info">
						<p class="highlighted"><strong>W21</strong> 23/26 de noviembre</p>
						<p class="highlighted">20 plazas</p>
						<p class="highlighted">99 €</p>
					</div>

					<div class="col-xs-12 col-sm-9 col-sm-pull-3 col-md-8 col-md-pull-4 col-lg-6 col-lg-pull-6 main-info">
						<h2>Desarrollo front-end responsive</h2>
						<p>Repasa los conceptos de HTML5, CSS y su APIS de JavaScrip y aprende alguna de las herramientas más utilizadas, 
						como Bootstrap 3 con <a href="#">Profesor 1</a>.</p>
						<a href="detail.php" class="btn btn-custom">ME APUNTO!</a>
						<a href="detail.php" class="more-info-link">quiero más información</a>
					</div>
				</div>
			</div>
		</article>
		<article id="w2" class="workshop workshop-right">
		<!--El artículo utiliza el ancho completo, porque esta fuera de Bootstrap:
		Lo único que contendrá es la imagen / el color de fondo.-->
			<div class="container">
			<!-->Dentro del artículo se incluye un container para recuperar el ancho adecuado
			 y poder dividirlo en filas y columnas-->
				<div class="row">
					<div class="col-xs-12 col-sm-3 col-md-4 col-lg-6 date-info">
						<h3 class="highlighted"><strong>W38</strong> 30 de noviembre / 2 de diciembre</h3>
						<h3 class="highlighted">15 plazas</h3>
						<h3 class="highlighted">120 €</h3>
					</div>
					<div class="col-xs-12 col-sm-9 col-md-8 col-lg-6 main-info">
						<h2>Desarrolla aplicaciones Web en JavaScript con Angular JS</h2>
						<p>Comprueba hasta que puntoe conocido framework de JavaScript facilita la creración de apps de una sóla página para la Web, en este curso impartido por <a href="#">Profesor 2</a>.</p>
						<a href="detail.php" class="more-info-link">quiero más información</a>
						<a href="detail.php" class="btn btn-custom">ME APUNTO!</a>	
					</div>
					
				</div>
			</div>
		</article>
	</div>

	<?php include 'inc/footer.php'; ?>

	<?php include 'inc/footer_common.php'; ?>
</body>
</html>