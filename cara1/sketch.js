function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);//fons de la pantalla,gris si té un número ENTRE 0 I 255 zero es negre. I 255 es blanc i qualsevol numero entre 0 i 255 serè gris. Si tenim 3 numeros el primer numero és vermellor o R (red), el segon número és la verdor o G de (green) i el tercer número és la blavor o B de (blue). Els colors RGB permeten construir setze milions de colors diferents(255x255x255)
 fill (245, 217, 174);// Funciona com el background amb rgb.
  ellipse(300,300,210,241);// El primer número entre parèntesis és la posició x del centre, el segon número és la posició y alçada del centre de l'el·lipse, el tercer número és l'amplada i el quart número és l'alçada de l'el·lipse.
  fill (239, 240, 233);//color ull dret esquerre. Funciona com el background amb rgb
  ellipse(250,250,50,30);// ull esquerre
  fill (239, 240, 233);//color ull dret
    ellipse(350,250,50,30);//ull dret
arc(300,350,120,40,0,PI);// Funciona com l'el·lipse els primers quatre números i els dos últims són 0 PI o PI,0
  triangle(300,300,330,360,310,320);
 fill(255);//color de la cella
  noFill();
  //stroke(0)
  arc(350,235,60,20,PI,0);//
  line(220,230,265,220);
}
