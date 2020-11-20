var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "#0885C2";
ctx.lineWidth = 10;
ctx.arc(250, 210, 70, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#010101";
ctx.lineWidth = 10;
ctx.arc(410, 210, 70, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#E10022";
ctx.lineWidth = 10;
ctx.arc(570, 210, 70, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#F3C302";
ctx.lineWidth = 10;
ctx.arc(330, 290, 70, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#029D3B";
ctx.lineWidth = 10;
ctx.arc(490, 290, 70, 0, 2 * Math.PI);
ctx.stroke();
