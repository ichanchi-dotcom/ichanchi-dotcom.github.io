// Farem moviments repetitius gràcies al sinus i cosinus que produiran canvis de color repetitius o moviments repetitius de la boca o els ulls o tota la cara o les pupil·les, etc.
// Crearem unes variables: canvipetit que canviarà de -8 a +8, canvimitja que canviarà de -15 a +15, canvigran que canviarà de -50 a +50, canvimoltgran que canviarà de -127 a +127.

function setup() {
createCanvas(600, 600); // Àrea de dibuix és de 600 px de 600 de cada costat.
  //Create an Audio input
  mic= new p5.AudioIn();
  
  //start the Audio Input
  //By default, it does not . connect() (to the computer speakers)
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  let h = map(vol, 0.001, 0.7, 0, 200);

let canvipetit=sin(frameCount*0.05)*8;
let canvimitja=sin(frameCount*0.05)*15;
let canvigran=sin(frameCount*0.05)*50;
let canvimoltgran=sin(frameCount*0.05)*127;
print(h);
 
  background (74+canvimoltgran, 88, 176); // Fons de pantalla, gris si te un número entre 0 i 255. 0 és negre i 255 és blanc. I qualsevol número entre 0 i 255 serà gris. Si tenim 3 números el primer número és vermellor o R (Red), el segon número és la verdor o G (Green) i el tercer número és la blauor o B (Blau). Els colors RGB permeten construir 16.000.000 de colors diferents (255x255x255).
 
  fill (252, 196, 154); // Color Cara.
  ellipse (300-canvipetit,300,200,250); // Cara. El primer número estre paréntesis és la posició x del centre del el·lipse, el segon número és la posició i alçada del centre de l'el·lipse, el tercer número és l'amplada de l'el·lipse i el quart número és l'alçada de l'el·lipse.
 
  fill (0,0,0); // Color Ull Esquerra. Funciona com el background.
  ellipse (260,270-canvipetit,60,30); // Ull Esquerra.
  fill (18+canvimoltgran, 18+canvimoltgran, 199); // Color Iris Esquerra.
  circle (260,270-canvipetit,25) // Iris Esquerra.
  fill (255, 255, 255); // Color Pupila Esquerra.
  circle (260,270-canvipetit,10); // Pupila Esquerra.
  noFill (); // Treure Color Cella Esquerra.
  arc (260,240,50,10,PI,0); // Cella Esquerra.
  fill (255, 255, 255); // Color Ull Dret.
  ellipse (340,270-canvipetit,60,30); // Ull Dret.
  fill (99+canvimoltgran, 64+canvimoltgran, 18); // Color Iris Dret.
  circle (340,270-canvipetit,25); // Iris Dret.
  fill (0+canvimoltgran,0+canvimoltgran,0); // Color Pupila Dreta.
  circle (340,270-canvipetit,10); // Pupila Dreta.
  noFill (); // Treure Color Cella Dreta.
  arc (340,240,50,10,PI,0); // Cella Dreta.
  //papallona feta amb 3 ellipses i moguda amb noise
   fill(81, 176, 158);
  let x= noise (frameCount*0.005)
  let y= noise (frameCount*0.005+10000)*100
  ellipse (x+30, y+30, 20, 20)

 
  fill(252,124,106); // Color Boca.
  arc (300-canvipetit,360,100,40-h,0,PI); 
  line(250-canvipetit,360,350-canvipetit,360)// Boca. Funciona com el el·lipse els primers quatre números i els dos últims són 0 PI o PI,0.
  fill (207,88,70); // Color Llengua.
 
 
 
  fill (242, 204,174); // Color Nas Llum.
  triangle (300,340,300,300,290,320); // Nas Llum.
   fill(0, 0, 0)//color cabell ellipse
  ellipse(300,170,70,60);
   fill(0, 0, 0)//color cabell ellipse
  ellipse(350,180,70,60);
  ellipse(380,220,70,60);
  ellipse(410,260,70,60);
  ellipse(420,310,70,60);
  ellipse(420,350,70,60);

  ellipse(240,180,70,60);
  ellipse(200,220,70,60);
  ellipse(190,270,70,60);
  ellipse(180,315,70,60);
  ellipse(195,349,70,60);

 
   }
