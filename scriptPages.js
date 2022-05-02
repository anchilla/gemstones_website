	
var brojac=1;

var ogrlice=["images2/nakit/ogrlice/01gorskikristal1.jpg", "images2/nakit/ogrlice/02labradoritaventurin.jpg", "images2/nakit/ogrlice/03ogrlice.jpg", "images2/nakit/ogrlice/04zadmes.jpg", "images2/nakit/ogrlice/05tirkizametist.jpg", "images2/nakit/ogrlice/06rozekvarckoral.jpg", "images2/nakit/ogrlice/07rodohrozitrozekvarc1.jpg", "images2/nakit/ogrlice/08opsidijanrozekvarc.jpg", "images2/nakit/ogrlice/09oniksopsidijan.jpg", "images2/nakit/ogrlice/10lapislazuli2.jpg", "images2/nakit/ogrlice/11lapistirkiz.jpg", "images2/nakit/ogrlice/12lapistirkiz1.jpg", "images2/nakit/ogrlice/13koral1.jpg", "images2/nakit/ogrlice/14hematit1.jpg", "images2/nakit/ogrlice/15polica2.jpg", "images2/nakit/ogrlice/16polica3.jpg"];
var ogrlice2=["images2/nakit/ogrlice/17cadjavaclapis1.jpg", "images2/nakit/ogrlice/18ametist3.jpg", "images2/nakit/ogrlice/19ametistsedef.jpg", "images2/nakit/ogrlice/20dsc00971.jpg", "images2/nakit/ogrlice/21dsc00972.jpg", "images2/nakit/ogrlice/22ametist4.jpg", "images2/nakit/ogrlice/23gorski_kristal2.jpg", "images2/nakit/ogrlice/24meseeva_reka.jpg", "images2/nakit/ogrlice/25g6.jpg", "images2/nakit/ogrlice/26g7.jpg", "images2/nakit/ogrlice/27hematitgranat.jpg", "images2/nakit/ogrlice/28karneol3.jpg", "images2/nakit/ogrlice/29karneol11.jpg", "images2/nakit/ogrlice/30lapis.jpg", "images2/nakit/ogrlice/31lapis2.jpg", "images2/nakit/ogrlice/32mix1.jpg"];
var ogrlice3=["images2/nakit/ogrlice/33mix11.jpg", "images2/nakit/ogrlice/34mix2.jpg", "images2/nakit/ogrlice/35mix3.jpg", "images2/nakit/ogrlice/36mix4.jpg", "images2/nakit/ogrlice/37mix5.jpg", "images2/nakit/ogrlice/38mix7.jpg", "images2/nakit/ogrlice/39mix8.jpg", "images2/nakit/ogrlice/40mix6.jpg", "images2/nakit/ogrlice/41mix9.jpg", "images2/nakit/ogrlice/42mix10.jpg", "images2/nakit/ogrlice/43rozekvarc3.jpg", "images2/nakit/ogrlice/44rozekvarc12.jpg", "images2/nakit/ogrlice/45fluorit5.jpg", "images2/nakit/ogrlice/46epidotunakit1.jpg", "images2/nakit/ogrlice/47cilibarzabebe1.jpg", "images2/nakit/ogrlice/48cilibarzabebe.jpg"];
var ogrlice4=["images2/nakit/ogrlice/49cilibar5.jpg", "images2/nakit/ogrlice/50ametist12.jpg", "images2/nakit/ogrlice/51ametist7.jpg"];
var text_ogrlice=["Gorski kristal 3100", "Labradorit-Ave. 3500", "Ogrlice 1500 - 3100", "Ogrlice 1500 - 3100", "Tirkiz-Ametist 2500", "Roze kvarc-Koral 2500", "Rodohrozit-Roze kv.", "Opsidijan-Roze kvarc", "Oniks-Opsidijan 2500", "Lapis lazuli 4500", "Lapis lazuli-Tirkiz 2500", "Lapis lazuli-Tirkiz 2100", "Koral 3100", "Hematit 2100", "Nakit od kristala", "Nakit od kristala"];
var text_ogrlice2=["Čađavac-Lapis 3100","Ametist 2500", "Ametist-Sedef 1500","Rodonit-Roze kvarc","Rodonit-Roze kvarc 3500","Ametist 3500","Gorski kristal (kvarc)","Mesečeva reka 3500","Gorski kristal 4900","Ogrlice od 1500","Hematit-biseri 1600","Karneol 2100 din","Karneol 2100 din","Lapis 4500 din","Lapis 4500 din","Ogrlice 2100 din"];
var text_ogrlice3=["Ogrlice od 1500","Ogrlice 2100 din",
"Ogrlice 2500 din","Nakit od kristala","Nakit od kristala","Nakit od kristala","Nakit od kristala","Ametist-tigrovo oko","Nakit od kristala","Nakit od kristala","Roze kvarc-srebro 4900","Roze kvarc-srebro 4900","Fluorit 2500 din","Epidot unakit 1600","Ćilibar za bebe 2500","Ćilibar za bebe 2500"];
var text_ogrlice4=["Ćilibar 1200 din",
"Ametist od 1600 din",
"Ametist 2500 din"];

	function newPicture(event){

 var x=document.getElementById("next");
 var y=document.getElementById("prev");
  var slides = document.getElementsByClassName("prod_image");
  var texts = document.getElementsByClassName("text_slike");
if(event.id=="prev"){
	switch(brojac){
		case 2:

  for (i = 0; i < slides.length; i++) {
  slides[i].src= ogrlice[i];
  texts[i].innerHTML = text_ogrlice[i];
 		}

 	/*	if {slides [i]>ogrlice[i]} slides[i].display="none"
 	a kad stavljam da su block onda samo sve stavim blick pre if-a

 	document.getElementById('text1').innerHTML = text_ogrlice[0];
 		document.getElementById('druga').src = ogrlice[1];
 		document.getElementById('text2').innerHTML = text_ogrlice[1];
 		document.getElementById('treca').src = ogrlice[2];
 		document.getElementById('text3').innerHTML = text_ogrlice[2];
		document.getElementById('cetvrta').src = ogrlice[3];
		document.getElementById('text4').innerHTML = text_ogrlice[3];
		document.getElementById('peta').src = ogrlice[4];
		document.getElementById('text5').innerHTML = text_ogrlice[4];
		document.getElementById('sesta').src = ogrlice[5];
		document.getElementById('text6').innerHTML = text_ogrlice[5];
		document.getElementById('sedma').src = ogrlice[6];
		document.getElementById('text7').innerHTML = text_ogrlice[6];
		document.getElementById('osma').src = ogrlice[7];
		document.getElementById('text8').innerHTML = text_ogrlice[7];
		document.getElementById('deveta').src = ogrlice[8];
		document.getElementById('text9').innerHTML = text_ogrlice[8];
		document.getElementById('deseta').src = ogrlice[9];
		document.getElementById('text10').innerHTML = text_ogrlice[9];
		document.getElementById('jedanesta').src = ogrlice[10];
		document.getElementById('text11').innerHTML = text_ogrlice[10];
		document.getElementById('dvanesta').src =ogrlice[11];
		document.getElementById('text12').innerHTML = text_ogrlice[11];
		document.getElementById('trinesta').src = ogrlice[12];
		document.getElementById('text13').innerHTML = text_ogrlice[12];
		document.getElementById('cetrnesta').src = ogrlice[13];
		document.getElementById('text14').innerHTML = text_ogrlice[13];
		document.getElementById('petnesta').src = ogrlice[14];
		document.getElementById('text15').innerHTML = text_ogrlice[14];
		document.getElementById('sesnesta').src = ogrlice[15];
		document.getElementById('text16').innerHTML = text_ogrlice[15];
*/

brojac--;
document.getElementById("demo").innerHTML = "<b>1</b> 2 3 4";
break;
		case 3:
		  for (i = 0; i < slides.length; i++) {
  slides[i].src= ogrlice2[i];
  texts[i].innerHTML = text_ogrlice2[i];
 		}

brojac--;
document.getElementById("demo").innerHTML = "1 <b>2</b> 3 4";
break;
		case 4:
		  for (i = 0; i < slides.length; i++) {
  slides[i].src= ogrlice3[i];
  texts[i].innerHTML = text_ogrlice3[i];
 		}

	document.getElementById('div4').style.display = "block";
 		document.getElementById('div5').style.display ="block";
		document.getElementById('div6').style.display = "block";
		document.getElementById('div7').style.display = "block";
		document.getElementById('div8').style.display = "block";
		document.getElementById('div9').style.display = "block";
		document.getElementById('div10').style.display = "block";
		document.getElementById('div11').style.display = "block";
		document.getElementById('div12').style.display = "block";
		document.getElementById('div13').style.display = "block";
		document.getElementById('div14').style.display = "block";
		document.getElementById('div15').style.display = "block";
		document.getElementById('div16').style.display = "block";

brojac--;
document.getElementById("demo").innerHTML = "1 2 <b>3</b> 4";
break;

}
}

if(event.id=="next"){
		switch(brojac){
		case 1:
		  for (i = 0; i < slides.length; i++) {
  slides[i].src= ogrlice2[i];
  texts[i].innerHTML = text_ogrlice2[i];
 		}

		brojac++;
		document.getElementById("demo").innerHTML =  "1 <b>2</b> 3 4";
		break;
		case 2:
		  for (i = 0; i < slides.length; i++) {
  slides[i].src= ogrlice3[i];
  texts[i].innerHTML = text_ogrlice3[i];
 		}

brojac++;
document.getElementById("demo").innerHTML = "1 2 <b>3</b> 4";
break;
		case 3:
		  for (i = 0; i < ogrlice4.length; i++) {
  slides[i].src= ogrlice4[i];
  texts[i].innerHTML = text_ogrlice4[i];
 		}

 		document.getElementById('div4').style.display = "none";
 		document.getElementById('div5').style.display = "none";
		document.getElementById('div6').style.display = "none";
		document.getElementById('div7').style.display = "none";
		document.getElementById('div8').style.display = "none";
		document.getElementById('div9').style.display = "none";
		document.getElementById('div10').style.display = "none";
		document.getElementById('div11').style.display = "none";
		document.getElementById('div12').style.display = "none";
		document.getElementById('div13').style.display = "none";
		document.getElementById('div14').style.display = "none";
		document.getElementById('div15').style.display = "none";
		document.getElementById('div16').style.display = "none";

brojac++;
document.getElementById("demo").innerHTML =  "1 2 3 <b>4</b>";
break;
}
	}
	}
dffges

/*za lightbox*/
var slideIndex = 1;
var p=document.getElementsByClassName("prev");
var nex=document.getElementsByClassName("next");
var ph = document.getElementById("imgSlide");
var ph_txt= document.getElementById("slide_text");

function openModal() {
  document.getElementById("myLightbox").style.display = "block";
}

/*ovo kad kliknem direktno na sliku*/
function currentSlide(index) {
	    /*  window.alert("Brojac je: " + brojac + " Index je: "+index);
	     poslednja stranica */
if(brojac===4 && index > ogrlice4.length-1){	
	index = 0;
}
	/* 15 je max broj indexa u nizu*/
if (index > 15) {
 	index = 0;
 }
 /* poslednja stranica */
  if (brojac===4 && index < 0) {
  	index = 2;
  }
  if (index < 0) {
  	index = ogrlice.length-1;
  }
 
slideIndex=index;

 switch(brojac){
 	case 1:
 ph.src=ogrlice[index];
ph_txt.innerHTML=text_ogrlice[index];
break;
case 2:
ph.src=ogrlice2[index];
ph_txt.innerHTML=text_ogrlice2[index];
 break;
 case 3:
ph.src=ogrlice3[index];
ph_txt.innerHTML=text_ogrlice3[index];
 break;
 case 4:
ph.src=ogrlice4[index];
ph_txt.innerHTML=text_ogrlice4[index];
 break;
}
}

  function closeModal() {
  document.getElementById("myLightbox").style.display = "none";
}

/* next i prev button*/

function prevNextSlide(n){
 
  currentSlide(slideIndex+=n);
}

  var z=document.getElementById("imgSlide");
   var y=document.getElementById("exsp");

function expand(){

  if(z.style.width==="100%"){
  z.style.width="70%";
  }else{
  z.style.width="100%";
  }

  y.classList.toggle("fa-compress");
}

function openSearch(){
   location.href = "search.html";
}