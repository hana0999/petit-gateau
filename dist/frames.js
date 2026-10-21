export const frameNames=['無框','奶油蕾絲','奶油拍立得','花園枝葉','玫瑰波浪'];
// All artwork is drawn in the same 1000-unit space for preview and PNG export.
export function drawFrame(ctx,style,size){
 if(!style)return;
 ctx.save();ctx.scale(size/1000,size/1000);
 const line=(x1,y1,x2,y2)=>{ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke()};
 const ellipse=(x,y,rx,ry,a=0,fill=true)=>{ctx.beginPath();ctx.ellipse(x,y,rx,ry,a,0,Math.PI*2);fill?ctx.fill():ctx.stroke()};
 const mat=(m,bottom=m)=>{ctx.fillRect(0,0,1000,m);ctx.fillRect(0,1000-bottom,1000,bottom);ctx.fillRect(0,m,m,1000-m-bottom);ctx.fillRect(1000-m,m,m,1000-m-bottom)};
 if(style===1){
  ctx.fillStyle='#f9f0df';mat(67);ctx.strokeStyle='#d4bd9f';ctx.lineWidth=1.8;ctx.strokeRect(30,30,940,940);ctx.strokeRect(51,51,898,898);
  ctx.fillStyle='#f9f0df';ctx.strokeStyle='#dfcbb1';
  for(let t=80;t<940;t+=24){for(let [x,y] of [[t,66],[t,934],[66,t],[934,t]]){ellipse(x,y,12,12);ellipse(x,y,7,7,0,false)}}
  ctx.fillStyle='#c1a88e';for(let t=92;t<930;t+=24){ellipse(t,39,1.7,1.7);ellipse(t,961,1.7,1.7);ellipse(39,t,1.7,1.7);ellipse(961,t,1.7,1.7)}
  for(let [x,y] of [[66,66],[934,66],[66,934],[934,934]]){ctx.fillStyle='#f7e6d4';for(let j=0;j<8;j++)ellipse(x+Math.cos(j*Math.PI/4)*17,y+Math.sin(j*Math.PI/4)*17,10,5,j*Math.PI/4);ctx.fillStyle='#bfa184';ellipse(x,y,4,4)}
 }else if(style===2){
  ctx.fillStyle='#fcf5e8';mat(65,154);ctx.strokeStyle='#ddcfbb';ctx.lineWidth=2;ctx.strokeRect(64,64,872,782);
  ctx.strokeStyle='#c99d99';ctx.lineWidth=3;
  // A small ribbon seal, with no lettering.
  ctx.beginPath();ctx.moveTo(500,912);ctx.bezierCurveTo(426,858,437,938,500,912);ctx.bezierCurveTo(574,858,563,938,500,912);ctx.stroke();line(500,913,474,941);line(500,913,526,941);ctx.fillStyle='#c99d99';ellipse(500,912,4,5);
 }else if(style===3){
  ctx.fillStyle='#e9edde';mat(43);ctx.strokeStyle='#b3bea1';ctx.lineWidth=1.7;ctx.strokeRect(24,24,952,952);
  for(let corner=0;corner<4;corner++){ctx.save();ctx.translate(corner%2?1000:0,corner>1?1000:0);ctx.scale(corner%2?-1:1,corner>1?-1:1);ctx.strokeStyle='#98a887';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(55,223);ctx.quadraticCurveTo(48,60,223,55);ctx.stroke();
   for(let j=0;j<7;j++){let t=j/6,x=56+156*t*t,y=56+156*(1-t)*(1-t);ctx.fillStyle=j%2?'#b5c0a0':'#a4b291';ellipse(x-8,y-8,14,5,-Math.PI/4);ellipse(x+9,y+9,13,5,-Math.PI/4);if(j===2||j===5){ctx.fillStyle='#d6afb2';for(let k=0;k<5;k++)ellipse(x+Math.cos(k*1.257)*7,y+Math.sin(k*1.257)*7,5,5);ctx.fillStyle='#ead6a9';ellipse(x,y,3,3)}}ctx.restore()}
 }else{
  ctx.fillStyle='#e7cbd0';mat(62);ctx.fillStyle='#e7cbd0';for(let t=70;t<970;t+=32){ellipse(t,62,16,16);ellipse(t,938,16,16);ellipse(62,t,16,16);ellipse(938,t,16,16)}
  ctx.strokeStyle='#fcf0e1';ctx.lineWidth=2;ctx.strokeRect(31,31,938,938);ctx.strokeRect(39,39,922,922);
  ctx.fillStyle='#fff1e0';for(let t=78;t<950;t+=32){ellipse(t,56,2,2);ellipse(t,944,2,2);ellipse(56,t,2,2);ellipse(944,t,2,2)}
  ctx.strokeStyle='#ba9298';ctx.lineWidth=2.4;for(let y of [37,963]){ctx.beginPath();ctx.moveTo(500,y);ctx.bezierCurveTo(440,y-29,446,y+25,500,y);ctx.bezierCurveTo(560,y-29,554,y+25,500,y);ctx.stroke()}
 }
 ctx.restore();
}
