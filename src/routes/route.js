"use strict";

module.exports = function(app) {
	let controller = app.controllers.controller;

	app.route('/api/buscar')
		.get(controller.buscarPapeis);
}