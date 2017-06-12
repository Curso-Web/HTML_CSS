<footer>
<!--Contenedor semántico: agrupa los elementos del footer sin aplicar nada de Bootstrap-->

	<div class="container">
	<!--Contenedor correspondiente de Bootstrap-->
		<div class="row">
		<!--Fila que contendrá 4 columnas distribuidas aparentemente en dos filas,
		 separadas por un clearfix para asegurar este efecto-->
			<div class="col-xs-5">
				<h3>PRÓXIMOS CURSOS</h3>
				<ul id="next-cursoss">
					<li><a href="detail.php">Título del primer curso</a></li>
					<li><a href="detail.php">Título del segundo segundo curso</a></li>
				</ul>
			</div><!--Fin de la columna 1-->
			<div class="col-xs-6 col-xs-offset-1">
				<h3>NO TE PIERDAS NUESTRAS NOVEDADES</h3>
				<form id="subscribe-form" action="">
					<div class="row">
					<!--anidamiento dentro de la columna para disponer de nuevo del grid de 12 columnas
					en el que introducimos el formulario-->
						<div class="col-xs-8">
							<div class="form-group">
								<label class="sr-only" for="email">tu correo electrónico</label>
								<!--Etiqueta unicamente para lectores de pantalla, que no soportan plaveholder-->
								<input type="text" id="email" name="email" class="form-control input-lg" placeholder="tu correo electrónico">
							</div>
						</div>
						<div class="col-xs-4">
							<button class="btn btn-custom btn-lg">SUSCRIBIRME</button>
						</div>
					</div>
				</form>
			</div><!--Fin de la columna 2-->
			<div class="clearfix"></div>
			<!--Separación "como una fila" entre las 2 primeras y las 2 segundas columnas-->
			<div class="col-xs-5">
				<h3>SOBRE LOS CURSOS</h3>
				<p>Estos cursos son el resultado de la colaboración de <a href="#">Empresa</a> y <a href="#">Empresa 2</a></p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas porro aperiam dolores eius perferendis tempora eum impedit ea, consequuntur quaerat totam animi deserunt, tempore saepe. Tempora dolor numquam quibusdam eius.</p>
			</div> <!--Fin de la columna 3-->
			<div class="col-xs-6 col-xs-offset-1">
				<h3>TE GUSTA? CORRE LA VOZ</h3>
				<p>Si te gusta esta filosofía de formación, o has acudido a uno de nuestros cursos y te hemos convencido, ayúdanos a promocionarlos por Internet para que otros puedan disfrutar de ellos:</p>
				<!-- Insertar addthis -->
			</div> <!--Fin de la columna 4-->
		</div> <!--Fin de la fila (row)-->
	</div> <!--Fin del contenedor-->
</footer>