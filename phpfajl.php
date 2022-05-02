<?php

$dir_name = "images2/nakit/ogrlice/";
$images = glob($dir_name."*.jpg");
foreach($images as $image) {

   echo '"'.$image.'", ';
}

$dir_name1 = "images2/kristali/obradjeni/";
$images1 = glob($dir_name1."*.jpg");
foreach($images1 as $image1) {

   echo '"'.$image1.'", ';
}

?>