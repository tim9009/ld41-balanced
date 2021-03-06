////////////////////////////// START ENGINE //////////////////////////////
function start() {
	Vroom.activateCamera(Vroom.createCamera(0, 0, 1, 'both', 0.5));

	// Disable image smooting
	var imageSmoothingEnabled = false;
	Vroom.ctx.mozImageSmoothingEnabled = imageSmoothingEnabled;
	Vroom.ctx.webkitImageSmoothingEnabled = imageSmoothingEnabled;
	Vroom.ctx.msImageSmoothingEnabled = imageSmoothingEnabled;
	Vroom.ctx.imageSmoothingEnabled = imageSmoothingEnabled;

	// Disable physics
	Vroom.physicsEnabled = false;

	// Vroooom vrooom!
	Vroom.run();

	gameState.gameStarted = true;
	gameSessionState.currentStep = steps.START;

	// Set focus on window to make the game work when played in an iFrame
	window.focus();
}

start();

// Wait for things to load.
//setTimeout(start, 1000);