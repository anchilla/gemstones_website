var ogrlice=["images2/nakit/ogrlice/01gorskikristal1.jpg",
 "images2/nakit/ogrlice/02labradoritaventurin.jpg",
  "images2/nakit/ogrlice/03ogrlice.jpg", "images2/nakit/ogrlice/04zadmes.jpg",
   "images2/nakit/ogrlice/05tirkizametist.jpg", 
   "images2/nakit/ogrlice/06rozekvarckoral.jpg", 
   "images2/nakit/ogrlice/07rodohrozitrozekvarc1.jpg", 
   "images2/nakit/ogrlice/08opsidijanrozekvarc.jpg", 
   "images2/nakit/ogrlice/09oniksopsidijan.jpg", 
   "images2/nakit/ogrlice/10lapislazuli2.jpg", 
   "images2/nakit/ogrlice/11lapistirkiz.jpg", 
   "images2/nakit/ogrlice/12lapistirkiz1.jpg",
    "images2/nakit/ogrlice/13koral1.jpg", 
    "images2/nakit/ogrlice/14hematit1.jpg", 
    "images2/nakit/ogrlice/15polica2.jpg", "images2/nakit/ogrlice/16polica3.jpg"];

var text_ogrlice=["Gorski kristal 3100", "Labradorit-Ave. 3500", "Ogrlice 1500 - 3100",
 "Ogrlice 1500 - 3100", "Tirkiz-Ametist 2500", "Roze kvarc-Koral 2500",
  "Rodohrozit-Roze kv.", "Opsidijan-Roze kvarc", "Oniks-Opsidijan 2500",
   "Lapis lazuli 4500", "Lapis lazuli-Tirkiz 2500", "Lapis lazuli-Tirkiz 2100",
    "Koral 3100", "Hematit 2100", "Nakit od kristala", "Nakit od kristala"];


function search(){

removePreviousDiv()

	var search_text = document.querySelector('#search_id').value; //selected by id;
var rez = document.getElementById("rez_met");
var search_text_up=search_text.toUpperCase();
var brojac = 0;

 if (search_text !== "") {
	 for (i = 0; i < text_ogrlice.length; i++) {
if(text_ogrlice[i].toUpperCase().search(search_text_up)!=-1){

		var div = document.createElement('div');
        var img = document.createElement('img');
        var p = document.createElement('p');

            img.src = ogrlice[i];
            p.innerHTML = text_ogrlice[i];  

// ✅ Set Attributes on Element
//div.setAttribute('id', 'my-id');


  //div.style.width = '30%';
 //if (window.innerWidth >= 1000) {
if( $(window).width() >= 780){
  div.style.width = '30%';
}
 if( $(window).width() < 780){
  div.style.width = '40%';
}
    if($(window).width()< 540){
 div.style.width = '85%';
}//else{
 // div.style.width = '30%';


div.classList.add("found_div");
div.style.padding = '10px';
div.style.margin = '10px';
div.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';

img.style.width = '100%';
img.style.height = '90%';
img.classList.add("found_imgs");
img.style.objectFit = 'contain';
img.style.cursor = 'pointer';

 div.appendChild(img);
 div.appendChild(p);

//add element to DOM - Body
const box = document.getElementById('display_r');
box.appendChild(div);
brojac++;
rez.innerHTML = "Nadjeno: "+brojac+ " rezultata za: -"+ search_text+".";

}else if(brojac==0){
  rez.innerHTML = "Nema rezultata u pretrazi";
}}
}else{
    return false;
  }
findElement();
}

function findElement(){
  var img = document.getElementsByClassName("found_imgs");
  for (var i = 0; i < img.length; i++) {
img[i].addEventListener("click", function(){
  showImg(this)
});
}
}

function showImg(img){

 document.getElementById("zoom_div").style.display="block";
  var x = document.getElementById("zoom").src=img.src;
}

function closeZoom(){
  document.getElementById("zoom_div").style.display="none";
}

//za enter
var search_text = document.getElementById("search_id");
search_text.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   search();
  }
});

function removePreviousDiv(){
if ($(".found_div").length !== 0){
$('.found_div').remove();
  }
}

function divSize(div){
  var s = $(window).width();
 if(s < 768){
  div.style.width = '40%';
 }
  if(s < 540){
 div.style.width = '60%';
}else{
  div.style.width = '30%';
}
}

