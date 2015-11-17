$(document).ready(function(){

var imgveo = 1, maxima = $(".grande").children().length -1;
	//Botones derecha e izquierda
	$(".derecha").click(function(){
		$(".grande").animate({ marginLeft :"+=-100%"});
		if( imgveo == maxima){
			$(".grande").animate({ marginLeft :"-0%"},0);
			imgveo = 0;
		}
		imgveo++;
		puntillos();
	});
	$(".izquierda").click(function(){		
		if( imgveo == 1){
			$(".grande").animate({ marginLeft :"-" + maxima*100 + "%"},0);
			imgveo = maxima + 1;
		}
		$(".grande").animate({ marginLeft :"+=100%"});
		imgveo--;
		puntillos();
	});
	function puntillos(){
		$(".puntos").css("background-color","transparent");
		$(".puntos."+imgveo).css("background-color","white");
		$("p.actual").html( imgveo );
	}
	// BOTONES PUNTOS
	$(".puntos.1").click(function(){
		event.preventDefault();
		$(".grande").animate({"margin-left":"0px"});
		imgveo = 1;
		puntillos()

	});
	$(".puntos.2").click(function(){
		event.preventDefault();
		$(".grande").animate({"margin-left":"-100%"});
		imgveo = 2;
		puntillos()

	});
	$(".puntos.3").click(function(){
		event.preventDefault();
		$(".grande").animate({"margin-left":"-200%"});
		imgveo = 3;
		puntillos()
	});
	//Imagenes
	$(".lista li").click(function(){
		var titulo=$(this).children("h2").html();
		var ruta = $(this).children().attr("src");
		$(".cerrar h3").html (titulo);
		$(".cerrar img").attr("src" , ruta);
		$(".cerrar").fadeIn();
	});
	$("span.fa").click(function(){
		$(".cerrar").fadeOut();
	});
});
	//header
	$(window).scroll(function(){
	var dondeestoy = $(window).scrollTop();
	if (dondeestoy >= 100){
		$(".main").addClass("headerTwo");
		$(".main").removeClass("header");
	} else {
		$(".main").addClass("header");
		$(".main").removeClass("headerTwo");
	}
	});