"use strict";

module.exports = function(app) {
	let controller = app.controllers.controller;

	app.route('/api/buscar')
		.get(controller.buscarPapeis);

	app.route('/api/candidatar')
		.post(controller.concorrer)

	app.route('/api/sosias')
		.get(controller.listSosias)

	app.route('/api/contratar')
		.post(controller.contratar)
}