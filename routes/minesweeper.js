'use strict';module.exports = {'/minesweeper': function(req, res){
	var grid = '';
	for (var n=1; n<=8; n++) {
		for (var p=1; p<=8; p++) {
			grid += "<span id='cell-" + n + "x" + p + "'></span>";
		}
		grid += "<br>";
	}
	res.send("<!DOCTYPE html5><head><title>Whoa sweepy</title>"
		+"<link rel='stylesheet' href='/static/minesweeper-client.css'></link>"
		+"</head><body><h1 id='title'>Minesweeper</h1>"
		+grid+"<script src='/static/minesweeper-client.js'></script></body>");
}};