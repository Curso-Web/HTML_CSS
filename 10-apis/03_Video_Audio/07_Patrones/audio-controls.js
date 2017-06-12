/* function and closure development pattern */
var controls = function (el) {
	
	// La función control encapsula el código
	// y crea una forma de API pública

	var audioControls = el,
	
	playButton = document.getElementById("play")
	stopButton = document.getElementById("stop");
	
	// definición de las funciones a la escucha de los eventos click
	playButton.addEventListener("click", play, false);
	stopButton.addEventListener("click", stop, false);

	function play() {
		// Manjador de eventos del boton play
		// accessing parent function variable - this is closure
		audioControls.setAttribute("class", "playing");
		// el botón play pone el fondo gris claro
	}

	function stop() {
		// Manjador de eventos del boton stop
		// accessing parent function variable
		audioControls.setAttribute("class", "stopped");
		// el botón stop pone el fondo gris oscuro
	}

	// set up a natural API to return
	return play, stop;
};

(function () {
	var element = document.getElementById("controls"),
	action = controls(element);
	// Use the API
	//action.play;
	//action.stop;
	console.log(action.play);
	})();