<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<?php include 'inc/head_common.php'; ?>
	<link rel="stylesheet" href="css/cursos.css">
	<title>Workshops con Bootstrap 3</title>
</head>
<body>
	<?php include 'inc/header.php'; ?>
	
	<div id="curso-list">
	<!--div contenedor genéroico, no bootstrap, para agupar los artículos ¿section?-->

		<article id="curso1" class="curso curso-left">
		<!--El artículo utiliza el ancho completo, porque esta fuera de Bootstrap:
		Lo único que contendrá es la imagen / el color de fondo.-->
			<div class="container">
			<!--Dentro del artículo se incluye un container para recuperar el ancho adecuado
			 y poder dividirlo en filas y columnas-->
				<div class="row">					
					<div class="col-xs-8 date-info">
						<h2>Desarrollo front-end responsive</h2>
						<p>Repasa los conceptos de HTML5, CSS y su APIS de JavaScrip y aprende alguna de las herramientas más utilizadas, 
						como Bootstrap 3 con <a href="#">Profesor 1</a>.</p>
						<a href="detail.php" class="btn btn-custom">ME APUNTO!</a>
						<a href="detail.php" class="more-info-link">quiero más información</a>
					</div>
					<div class="col-xs-3 col-xs-offset-1 main-info">
						<ul>
							<li class="highlighted"><strong>W21</strong> 23/26 de noviembre</li>
							<li class="highlighted">20 plazas</li>
							<li class="highlighted">99 €</li>
						</ul>
					</div>
				</div>
			</div>
		</article>

		<article id="curso2" class="curso curso-right">
		<!--El artículo utiliza el ancho completo, porque esta fuera de Bootstrap:
		Lo único que contendrá es la imagen / el color de fondo.-->
			<div class="container">
			<!--Dentro del artículo se incluye un container para recuperar el ancho adecuado
			 y poder dividirlo en filas y columnas-->
				<div class="row">
					<div class="col-xs-3 date-info">
						<ul>
							<li class="highlighted"><strong>W38</strong> 30 de noviembre / 2 de diciembre</li>
							<li class="highlighted">15 plazas</li>
							<li class="highlighted">120 €</li>							
						</ul>
					</div>
					<div class="col-xs-8 col-xs-offset-1 main-info">
						<h2>Desarrolla aplicaciones Web en JavaScript con Angular JS</h2>
						<p>Comprueba hasta que puntoe conocido framework de JavaScript facilita la creración de apps de una sóla página para la Web, en este curso impartido por <a href="#">Profesor 2</a>.</p>
						<a href="detail.php" class="_more-info-link">quiero más información</a>
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