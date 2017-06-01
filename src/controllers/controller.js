"use strict";

module.exports = function(app) {
  let Controller = {}
  
  Controller.concorrer = (request,response) => {
 		let body = request.body
 		console.log(body)
 		return response.json({mensagem:'você está concorrendo! Boa sorte!'})   
  }

  Controller.buscarPapeis = (request,response) => {
  	let info = JSON.parse(request.query.info)
  	let sosiaDe = info.sosiaDe
  	let altura = info.altura || 1.80
  	let peso = info.peso || 80
  	let cor = info.cor || 'Negro'
  	let vagas = [
  		{sosiaDe: sosiaDe,altura:altura,peso:peso,cor:cor,agencia:'nasa'},
  		{sosiaDe: sosiaDe,altura:altura,peso:peso,cor:cor,agencia:'virgin group'},
  		{sosiaDe: sosiaDe,altura:altura,peso:peso,cor:cor,agencia:'spacex'},
  	]

    return response.json(vagas)
  }

  Controller.listSosias = (request,response) => {
  	let info = JSON.parse(request.query.info)
  	let sosiaDe = info.sosiaDe
  	let altura = info.altura || 1.80
  	let peso = info.peso || 80
  	let cor = info.cor || 'Negro'
  	let idade = info.idade

  	let sosias = [
  		{nome:'Robert petterson',idade:idade||39,rating:4},
  		{nome:'João De Niro',idade:idade||30,rating:5},
  		{nome:'Samuel Jackson',idade:idade||27,rating:3},
  		{nome:'Ovanovick Proust',idade:idade||21,rating:4}
  	]

  	return response.json(sosias);
  }

  
  Controller.contratar = (request,response) => {
  		let sosia = request.body

  		response.json({mensagem:'sosia '+sosia.nome+' contratado!'})
  }

  return Controller;
}
