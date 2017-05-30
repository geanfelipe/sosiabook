"use strict";

module.exports = function(app) {
  let Controller = {}
  
  Controller.concorrer = (request,response) => {
    
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

  return Controller;
}
